import React, { useState, useRef } from 'react';
import Box from '@material-ui/core/Box';
import ButtonBase from '@material-ui/core/ButtonBase';
import Paper from '@material-ui/core/Paper';
import CloseIcon from '@material-ui/icons/Close';
import CardMedia from '@material-ui/core/CardMedia';
import CameraIcon from '@material-ui/icons/CameraAlt';
import VideoIcon from '@material-ui/icons/Movie';
import Typography from '@material-ui/core/Typography';
import Iframe from '@/container/Dynamic/components/Iframe';
import Button from '@/components/Button/Loading';
import UpPicture from '@/components/Upload/Wrapper';
import Popper from '@/components/Popper';
import { useOnMount, useOnUnmount } from '@/hooks';
import Snackbar from '@/components/Snackbar';
import useStyles from './styles';
import SelectTopic from '../SelectTopic';
import Emoticon from '../Emoticon';
import Input from '../Input';
import { html2text, text2html, getByteLen } from '../../utils';

const MAX_TEXT_LENGTH = 233;

const DEFAULT_VALUE = { content: '', pictures: [], iframe: undefined };

function DynamicEditor({ initialValues = DEFAULT_VALUE, loading, onSubmit }) {
  const input = useRef();
  const classes = useStyles();
  const [ pictures, setPictures ] = useState(initialValues.pictures);
  const [ iframe, setIframe ] = useState(initialValues.iframe);
  const [ lastEditRange, setLastEditRange ] = useState();
  const [ contentLength, setContentLength ] = useState(0);
  const _html = text2html(initialValues.content);


  useOnMount(() => {
    const edit = input.current;
    edit.addEventListener('click', getCursor);
    edit.addEventListener('keyup', getCursor);
    edit.addEventListener('paste', onPastePureText);

    updateContentLength();
  });

  useOnUnmount(() => {
    const edit = input.current;
    edit.removeEventListener('click', getCursor);
    edit.removeEventListener('keyup', getCursor);
    edit.removeEventListener('paste', onPastePureText);
  });

  function getCursor() {
    try {
      // 获取选定对象
      const selection = getSelection();
      // 设置最后光标对象
      const range = selection.getRangeAt(0);
      setLastEditRange(range);

      updateContentLength();
    } catch (error) {
      console.log(error);
    }
  }

  function updateContentLength() {
    const edit = input.current;
    // console.log(getByteLen(edit.innerHTML).length);
    setContentLength(getByteLen(edit.innerHTML).length);
  }

  function insetText(text) {
    // 获取编辑框对象
    const edit = input.current;
    // 获取输入框对象
    // const emojiInput = document.getElementById('emojiInput');
    // 编辑框设置焦点
    edit.focus();
    // 获取选定对象
    const selection = getSelection();
    // 判断是否有最后光标对象存在
    if (lastEditRange) {
      // 存在最后光标对象，选定对象清除所有光标并添加最后光标还原之前的状态
      selection.removeAllRanges();
      selection.addRange(lastEditRange);
    }

    // setContent(`${content}[xxxxx]`);
    // 判断选定对象范围是编辑框还是文本节点
    if (selection.anchorNode.nodeName !== '#text') {
      // 如果是编辑框范围。则创建表情文本节点进行插入
      const emojiText = document.createTextNode(text);

      if (edit.childNodes.length > 0) {
        // 如果文本框的子元素大于0，则表示有其他元素，则按照位置插入表情节点
        for (let i = 0; i < edit.childNodes.length; i += 1) {
          if (i === selection.anchorOffset) {
            edit.insertBefore(emojiText, edit.childNodes[i]);
          }
        }
      } else {
        // 否则直接插入一个表情元素
        edit.appendChild(emojiText);
      }

      // 创建新的光标对象
      const range = document.createRange();
      // 光标对象的范围界定为新建的表情节点
      range.selectNodeContents(emojiText);
      // 光标位置定位在表情节点的最大长度
      range.setStart(emojiText, emojiText.length);
      // 使光标开始和光标结束重叠
      range.collapse(true);
      // 清除选定对象的所有光标对象
      selection.removeAllRanges();
      // 插入新的光标对象
      selection.addRange(range);
    } else {
      // 如果是文本节点则先获取光标对象
      const range = selection.getRangeAt(0);
      // 获取光标对象的范围界定对象，一般就是textNode对象
      const textNode = range.startContainer;
      // 获取光标位置
      const rangeStartOffset = range.startOffset;
      // 文本节点在光标位置处插入新的表情内容
      textNode.insertData(rangeStartOffset, text);
      // 光标移动到到原来的位置加上新内容的长度
      range.setStart(textNode, rangeStartOffset + text.length);
      // 光标开始和光标结束重叠
      range.collapse(true);
      // 清除选定对象的所有光标对象
      selection.removeAllRanges();
      // 插入新的光标对象
      selection.addRange(range);
    }
    // 无论如何都要记录最后光标对象
    getCursor();
  }

  function insetEmoji({ name, url }) {
    // 获取编辑框对象
    const edit = input.current;
    // 获取输入框对象
    // const emojiInput = document.getElementById('emojiInput');
    // 编辑框设置焦点
    edit.focus();
    // 获取选定对象
    const selection = getSelection();
    // 判断是否有最后光标对象存在
    if (lastEditRange) {
      // 存在最后光标对象，选定对象清除所有光标并添加最后光标还原之前的状态
      selection.removeAllRanges();
      selection.addRange(lastEditRange);
    }

    // 如果是文本节点则先获取光标对象
    const range = selection.getRangeAt(0);
    // 创建需追加到光标处节点的文档片段
    const fragment = range.createContextualFragment(`<img src="${url}"  class="emoji" alt="${name}">`);
    // 将创建的文档片段插入到光标处
    range.insertNode(fragment.lastChild);
    // 光标开始和光标结束重叠
    range.collapse(); // 有参数true，会使结束光标与开始光标重合
    // 清除选定对象的所有光标对象
    selection.removeAllRanges();
    // 插入新的光标对象
    selection.addRange(range);

    // 无论如何都要记录最后光标对象
    getCursor();
  }

  function onPastePureText(e) {
    if (e.clipboardData) {
      // 阻止默认行为
      e.preventDefault();
      // 获取输入框对象
      const edit = input.current;
      // 编辑框设置焦点
      edit.focus();
      // 获取剪贴板的文本
      const text = e.clipboardData.getData('text');

      // insetText(text);
      if (window.getSelection && text !== '' && text !== null) {
        // 创建文本节点
        const textNode = document.createTextNode(text);
        // 在当前的光标处插入文本节点
        const range = window.getSelection().getRangeAt(0);
        const selection = getSelection();

        // 删除选中文本
        range.deleteContents();
        // 插入文本
        range.insertNode(textNode);
        // 设置光标位置
        range.setStart(textNode, text.length);
        // 闭合选区
        range.collapse(true);
        // 清除选定对象的所有光标对象
        selection.removeAllRanges();
        // 插入新的光标对象
        selection.addRange(range);
      }
    }
  }

  function onUpPictureSuccess(data) {
    setPictures([ ...pictures, ...data ]);
  }

  function onDeletePictures(idx) {
    pictures.splice(idx, 1);
    setPictures([ ...pictures ]);
  }

  function _onSubmit() {
    const edit = input.current;
    const text = html2text(edit.innerHTML);


    if (!iframe && (!pictures || pictures.length === 0) && !text) {
      edit.focus();
      Snackbar.error('什么都没写，别想蒙混过关！');
      return;
    }

    if (contentLength > MAX_TEXT_LENGTH) {
      edit.focus();
      Snackbar.error('字数超出限制啦，长内容请使用文章进行发布！');
      return;
    }


    if (typeof onSubmit === 'function') {
      onSubmit({
        content: text, iframe, pictures,
      }, () => {
        edit.innerHTML = '';
        setPictures([]);
        setIframe();
      });
    }
  }

  return (
    <>
      <div
        contentEditable
        suppressContentEditableWarning
        id="edit"
        placeholder="有什么想和大家分享的？"
        className={classes.input}
        ref={input}
        dangerouslySetInnerHTML={{ __html: _html }}
      />


      {pictures.length > 0 && (
        <Box display="flex" m={-0.5} mt={1.5} flexWrap="wrap">
          {pictures.map((i, idx) => (
            <Box key={i} className={classes.item}>
              <CardMedia className={classes.picture} image={i} />
              <ButtonBase
                className={`${classes.close} pictures-close-btn`}
                onClick={() => { onDeletePictures(idx); }}
              >
                <CloseIcon />
              </ButtonBase>
            </Box>
          ))}
        </Box>
      )}

      {/* {iframe && (
        <Box mt={2}>
          <Iframe
            iframe={iframe}
          />
        </Box>
      )} */}

      <Box mt={2} display="flex" alignItems="center">
        <Box display="flex" flexGrow={1}>

          <UpPicture multiple onChange={onUpPictureSuccess}>
            <ButtonBase aria-label="Camera">
              <CameraIcon style={{ width: 28, height: 28, color: '#999' }} />
            </ButtonBase>
          </UpPicture>

          <Box ml={2} />

          <Popper
            content={(
              <Paper elevation={2}>
                <Box p={1}>
                  <Input
                    value={iframe}
                    onChange={setIframe}
                  />
                  {iframe && (
                    <>
                      <Box mt={1}>
                        <Iframe
                          iframe={iframe}
                        />
                      </Box>
                      <Box mt={1}>
                        <Button fullWidth onClick={() => { setIframe(''); }}>清除视频</Button>
                      </Box>
                    </>
                  )}
                </Box>
              </Paper>
            )}
          >
            <ButtonBase style={{ color: '#999' }} aria-label="Camera">
              <VideoIcon color={iframe ? 'primary' : 'inherit'} style={{ width: 28, height: 28 }} />
            </ButtonBase>
          </Popper>

          <Box ml={2} />

          <Popper
            content={(
              <Paper elevation={2}>
                <Box p={1}><SelectTopic onClick={({ title }) => { insetText(`#${title}#`); }} /></Box>
              </Paper>
            )}
          >
            <Box style={{ width: 28, height: 28, textAlign: 'center', lineHeight: '28px', fontSize: 28, color: '#999' }}>#</Box>
          </Popper>

          <Box ml={2} />

          <Popper
            content={(
              <Paper elevation={2}>
                <Box p={1}>
                  <Emoticon
                    insetEmoji={insetEmoji}
                    insetText={insetText}
                  />
                </Box>
              </Paper>
            )}
          >
            <img style={{ width: 28, height: 28 }} src="https://imgs.react.mobi/emoticon/xjh/00.gif" alt="" />
          </Popper>


        </Box>
        <Box mx={2}>
          <Typography variant="caption" style={{ color: contentLength > MAX_TEXT_LENGTH ? 'red' : '#999' }}>
            {MAX_TEXT_LENGTH - contentLength}
          </Typography>
        </Box>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.submit}
          // loading={status === 'loading'}
          loading={loading}
          onClick={_onSubmit}
        >
          发布
        </Button>
      </Box>


    </>
  );
}

export default DynamicEditor;
