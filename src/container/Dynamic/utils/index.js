export function html2text(html) {
  return html.replace(/(.*?)<img.*?alt="(.*?)">/ig, '$1$2')
    .replace(/<br>/ig, '')
    .replace(/<div>/ig, '\n')
    .replace(/<\/div>/ig, '');
}

export function text2html(str) {
  return str
    .replace(/(.*?)\[(.*?)_(.*?)]/ig, '$1<img src="https://imgs.react.mobi/emoticon/$2/$3.gif" class="emoji" alt="[$2_$3]">')
    .replace(/(.*?)\n(.*?)/ig, '$1<div>$2</div>');
}


export function topics2Html(html, topics) {
  /* eslint-disable no-param-reassign */
  topics.map((i) => {
    const reg = new RegExp(`#${i.title}#`);
    html = html.replace(reg, `<a href="/dynamic?topic=${i.number}" class="MuiTypography-root MuiLink-root MuiLink-underlineNone MuiTypography-colorPrimary">#${i.title}#</a>`);
  });
  return html;
}
