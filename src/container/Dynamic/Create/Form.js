import React, { Fragment, useState, useRef } from 'react';
import Box from '@material-ui/core/Box';
import ButtonBase from '@material-ui/core/ButtonBase';
import CloseIcon from '@material-ui/icons/Close';
import Icon from '@material-ui/core/Icon';
import CardMedia from '@material-ui/core/CardMedia';
import PhotoIcon from '@material-ui/icons/Photo';
import IconButton from '@material-ui/core/IconButton';
import Button from '@/components/Button/Loading';
import UpPicture from '@/components/Upload/Wrapper';
import { useOnMount, useOnUnmount } from '@/hooks';
import useStyles from './styles';
import Popper from '@/components/Popper';
import SelectTopic from './components/SelectTopic';
import Emoticon from './components/Emoticon';

function CreateCommentForm({ onSubmit, initialValues = {}, status }) {
  const { content: _content, pictures: _pictures = [] } = initialValues;
  const classes = useStyles();
  const input = useRef();
  const [ content, setContent ] = useState(_content);
  const [ pictures, setPictures ] = useState(_pictures);
  // const [ selection, setSelection ] = useState();
  const [ range, setRange ] = useState();

  useOnMount(() => {
    const edit = input.current;
    edit.addEventListener('click', getCursor);
    edit.addEventListener('keyup', getCursor);
  });

  useOnUnmount(() => {
    const edit = input.current;
    edit.removeEventListener('click', getCursor);
    edit.removeEventListener('keyup', getCursor);
  });

  function getCursor() {
    // 获取选定对象
    const selection = getSelection();
    // 设置最后光标对象
    const lastEditRange = selection.getRangeAt(0);
    console.log('lastEditRange');
    console.log(lastEditRange);

    setRange(lastEditRange);
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
    if (range) {
      // 存在最后光标对象，选定对象清除所有光标并添加最后光标还原之前的状态
      selection.removeAllRanges();
      selection.addRange(range);
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
      const newRange = document.createRange();
      // 光标对象的范围界定为新建的表情节点
      newRange.selectNodeContents(emojiText);
      // 光标位置定位在表情节点的最大长度
      newRange.setStart(emojiText, emojiText.length);
      // 使光标开始和光标结束重叠
      newRange.collapse(true);
      // 清除选定对象的所有光标对象
      selection.removeAllRanges();
      // 插入新的光标对象
      selection.addRange(newRange);
    } else {
      // 如果是文本节点则先获取光标对象
      const newRange = selection.getRangeAt(0);
      // 获取光标对象的范围界定对象，一般就是textNode对象
      const textNode = newRange.startContainer;
      // 获取光标位置
      const rangeStartOffset = newRange.startOffset;
      // 文本节点在光标位置处插入新的表情内容
      textNode.insertData(rangeStartOffset, text);
      // 光标移动到到原来的位置加上新内容的长度
      newRange.setStart(textNode, rangeStartOffset + text.length);
      // 光标开始和光标结束重叠
      newRange.collapse(true);
      // 清除选定对象的所有光标对象
      selection.removeAllRanges();
      // 插入新的光标对象
      selection.addRange(newRange);
    }
    // 无论如何都要记录最后光标对象
    const lastEditRange = selection.getRangeAt(0);
    setRange(lastEditRange);
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
    if (range) {
      // 存在最后光标对象，选定对象清除所有光标并添加最后光标还原之前的状态
      selection.removeAllRanges();
      selection.addRange(range);
    }

    // 如果是文本节点则先获取光标对象
    const newRange = selection.getRangeAt(0);
    // 创建需追加到光标处节点的文档片段
    const fragment = range.createContextualFragment(`<img src="${url}" name="${name}" class="emoji">`);
    // 将创建的文档片段插入到光标处
    newRange.insertNode(fragment.lastChild);
    // 光标开始和光标结束重叠
    newRange.collapse(); // 有参数true，会使结束光标与开始光标重合
    // 清除选定对象的所有光标对象
    selection.removeAllRanges();
    // 插入新的光标对象
    selection.addRange(newRange);

    // 无论如何都要记录最后光标对象
    const lastEditRange = selection.getRangeAt(0);
    setRange(lastEditRange);
  }


  function onUpPictureSuccess(data) {
    setPictures([ ...pictures, ...data ]);
  }
  function onDeletePictures(idx) {
    pictures.splice(idx, 1);
    setPictures([ ...pictures ]);
  }
  return (
    <Fragment>
      <div
        contentEditable
        suppressContentEditableWarning
        id="edit"
        className={classes.input}
        ref={input}
      >
        {content}
      </div>
      <Box mt={1} display="flex" justifyContent="space-between" alignItems="flex-start">
        <Box>
          <UpPicture multiple onChange={onUpPictureSuccess}>
            <IconButton aria-label="Photo">
              <PhotoIcon />
            </IconButton>
          </UpPicture>
          <Popper
            content={(
              <Box p={1}>
                <SelectTopic
                  onClick={(topic) => {
                    insetText(`#${topic.title}#`);
                  }}
                />
              </Box>
            )}
          >
            <Icon>#</Icon>
          </Popper>

          <Popper
            content={(
              <Box p={1}>
                <Emoticon
                  onClick={insetEmoji}
                  // onClick={(topic) => {
                  //   setContent(content + topic.name);
                  //   input.current.focus();
                  //   // const sel = window.getSelection();
                  //   // if (range) {
                  //   //   console.log('range111111');
                  //   //   console.log(range);
                  //   //   sel.removeAllRanges();
                  //   //   sel.addRange(range);
                  //   // }
                  // }}
                />
              </Box>
                )}
          >
            <Icon>@</Icon>
          </Popper>
        </Box>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.submit}
          // disabled={status === 'loading' || !isEmpty(errors)}
          loading={status === 'loading'}
        >
          发布
        </Button>
      </Box>

      <Box mt={1} />
      <Box display="flex" m={-0.5}>
        {pictures.map((i, idx) => (
          <Box key={i} className={classes.item}>
            <CardMedia className={classes.picture} image={i} />
            <ButtonBase className={`${classes.close} pictures-close-btn`} onClick={() => { onDeletePictures(idx); }}>
              <CloseIcon />
            </ButtonBase>
          </Box>
        ))}
      </Box>
    </Fragment>


  );
}

export default CreateCommentForm;
