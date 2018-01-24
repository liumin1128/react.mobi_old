import { stringify } from 'query-string';
import request from '../../utils/request';

const getTopics = async () => {
  const params = {
    page: 1,
    // tab: ask share job good
    mdrender: false,
    limit: 10,
  };
  const url = `https://cnodejs.org/api/v1/topics?${stringify(params)}`;
  console.log('url');
  console.log(url);
  const data = await request(url, {}, { method: 'GET' });
  console.log(data);
};

export default {
  getTopics,
};
