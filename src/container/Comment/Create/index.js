import React, { useState, useRef } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import { useMutation } from '@/hooks/graphql';
import Button from '@/components/Button/Loading';
import Popper from '@/components/Popper';
// import { DYNAMIC_CREATE, DYNAMIC_LIST } from '@/graphql/schema/dynamic';
import { CREATE_COMMENT, COMMENT_LIST } from '@/graphql/schema/comment';
import { useOnMount, useOnUnmount } from '@/hooks';
import Snackbar from '@/components/Snackbar';
import Emoticon from '@/container/Dynamic/components/Emoticon';
import { html2text } from '@/container/Dynamic/utils';
import useStyles from './styles';

function CommentCreate({ commentTo, replyTo, session, update, autoFocus }) {
  const [ status, setStatus ] = useState('default');
  const input = useRef();
  const classes = useStyles();
  const [ lastEditRange, setLastEditRange ] = useState();
  const [ createComment, { loading } ] = useMutation(CREATE_COMMENT, { commentTo, replyTo, session });

  // console.log('CommentCreate loading');
  // console.log(loading);
  useOnMount(() => {
    const edit = input.current;
    edit.addEventListener('click', getCursor);
    edit.addEventListener('keyup', getCursor);
    edit.addEventListener('paste', onPastePureText);

    // if (_content) {
    //   edit.innerHTML = text2html(_content);
    // }

    if (autoFocus) {
      setTimeout(() => {
        edit.focus();
        // insetText('111');
      }, 300);
    }
  });


  useOnUnmount(() => {
    const edit = input.current;
    edit.removeEventListener('click', getCursor);
    edit.removeEventListener('keyup', getCursor);
    edit.removeEventListener('paste', onPastePureText);
  });

  function onPastePureText(e) {
    if (e.clipboardData) {
      // 阻止默认行为
      e.preventDefault();
      // 获取剪贴板的文本
      const text = e.clipboardData.getData('text');
      if (window.getSelection && text !== '' && text !== null) {
        // 创建文本节点
        const textNode = document.createTextNode(text);
        // 在当前的光标处插入文本节点
        const range = window.getSelection().getRangeAt(0);
        // 删除选中文本
        range.deleteContents();
        // 插入文本
        range.insertNode(textNode);
      }
    }
  }

  function getCursor() {
    try {
      // 获取选定对象
      const selection = getSelection();
      // 设置最后光标对象
      const range = selection.getRangeAt(0);
      setLastEditRange(range);
    } catch (error) {
      console.log(error);
    }
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

  function onSubmit() {
    setStatus('loading');
    const edit = input.current;
    const content = html2text(edit.innerHTML);

    createComment({ content }, {
      update: (store, { data: { result: { status: code, message, data: result } } }) => {
        setStatus('default');
        if (code === 200) {
          edit.innerHTML = '';

          const _data = store.readQuery({ query: COMMENT_LIST, variables: { session } });

          const data = {
            meta: { ..._data.meta, count: _data.meta.count + 1 },
            list: [ result, ..._data.list ],
          };

          store.writeQuery({ query: COMMENT_LIST, variables: { session }, data });
          // if (update) update(store);
        } else {
          Snackbar.error(message);
        }
      },
    });
  }

  return (
    <>
      <div
        contentEditable
        suppressContentEditableWarning
        id="edit"
        placeholder="回帖请自觉遵守互联网相关的政策法规。"
        className={classes.input}
        ref={input}
      />
      <Box mt={1} display="flex" alignItems="center">
        <Box display="flex" flexGrow={1}>
          <Popper
            content={(
              <Paper>
                <Box p={1}>
                  <Emoticon insetEmoji={insetEmoji} insetText={insetText} />
                </Box>
              </Paper>
            )}
          >
            <img style={{ width: 32, height: 32 }} src="https://imgs.react.mobi/emoticon/xjh/00.gif" alt="" />
          </Popper>
          {/* <FormControlLabel
            value="end"
            control={<Checkbox color="primary" />}
            label="同时转发到我的动态"
            labelPlacement="end"
          /> */}
        </Box>
        <Box mx={2}>
          <Typography variant="caption" style={{ color: '#999' }}>233</Typography>
        </Box>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.submit}
          loading={status === 'loading'}
          onClick={() => onSubmit()}
          size="small"
        >
          发表评论
        </Button>
      </Box>
    </>
  );
}

export default CommentCreate;

// import React, { useState } from 'react';
// import { CREATE_COMMENT, COMMENT_LIST } from '@/graphql/schema/comment';
// import { useMutation } from '@/hooks/graphql';
// import Snackbar from '@/components/Snackbar';
// import Form from './Form';

// function CommentCreate({ commentTo, replyTo, session, callback, autoFocus }) {
//   const [ status, setStatus ] = useState('default');
//   const createComment = useMutation(CREATE_COMMENT, { commentTo, replyTo, session }, {});


//   return (
//     <Form
//       onSubmit={(values, form) => {
//         setStatus('loading');
//         createComment(values, {
//           update: (store, { data: { result: { status: code, message, data: result } } }) => {
//             setStatus('default');
//             if (callback) callback();
//             if (code === 200) {
//               if (form) form.reset();
//               const data = store.readQuery({ query: COMMENT_LIST, variables: { session } });
//               data.list.unshift(result);
//               data.meta.count += 1;
//               store.writeQuery({ query: COMMENT_LIST, variables: { session }, data });
//             } else {
//               Snackbar.error(message);
//             }
//           },
//         });
//       }}
//       status={status}
//       autoFocus={autoFocus}
//     />
//   );
// }

// export default CommentCreate;
