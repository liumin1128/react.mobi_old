import timeagojs from 'timeago.js';

export default data => timeagojs().format(data, 'zh_CN');
