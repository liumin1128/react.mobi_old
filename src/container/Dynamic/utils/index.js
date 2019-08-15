export function html2text(html) {
  return html.replace(/(.*?)<img.*?alt="(.*?)">/ig, '$1$2')
    .replace(/<br>/ig, '')
    .replace(/<div>/ig, '\n')
    .replace(/<\/div>/ig, '');
}

export function text2html(str) {
  return str
    .replace(/(.*?)\[(.*?)_(.*?)]/ig, '$1<img src="https://imgs.react.mobi/emoticon/$2/$3.gif" class="emoji" alt="[$2_$3]">')
    .replace(/(.*?)\n(.*?)/ig, '$1<div>$2</div>')
    .replace(/^((https?|ftp):\/\/)?([\da-z.-]+)\.([a-z.]{2,6})(\/\w\.-]*)*\/?/, '$1,$2,$3,$4,$5,xxxxxxxxxxx');
}


export function topics2Html(html, topics) {
  /* eslint-disable no-param-reassign */
  topics.map((i) => {
    const reg = new RegExp(`#${i.title}#`);
    html = html.replace(reg, `<a href="/dynamic?topic=${i.number}" class="MuiTypography-root MuiLink-root MuiLink-underlineNone MuiTypography-colorPrimary">#${i.title}#</a>`);
  });
  return html;
}


function isIE() {
  if (!!window.ActiveXObject || 'ActiveXObject' in window) {
    return true;
  } else {
    return false;
  }
}


// 输入框绑定事件
export function addPasteEvent(ele) {
  var isIE = isIE();
  // 只有IE支持beforepaste
  if (isIE) {
    ele.addEventListener('beforepaste', () => {
      if (window.clipboardData) {
        const txt = window.clipboardData.getData('text');
        if (txt !== '' && txt) {
          window.clipboardData.setData('text', txt);
        }
      }
    });
  } else {
    // 绑定粘贴事件
    ele.addEventListener('paste', (e) => {
      if (e.originalEvent.clipboardData) {
        // 阻止默认行为
        e.preventDefault();
        const { clipboardData } = e.originalEvent;
        // 获取剪贴板的文本
        const text = clipboardData.getData('text');
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
    });
  }
}
