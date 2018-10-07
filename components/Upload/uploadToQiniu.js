import { graphql } from 'react-apollo';
import { QINIU_TOKEN } from '@/graphql/schema/qiniu';
import { QINIUURL, QINIU_UPLOADURL } from '@/config/base';

export default graphql(QINIU_TOKEN, {
  ssr: false,
  props: ({ data }) => ({
    data,
    action: QINIU_UPLOADURL,
    qiniuUrl: QINIUURL,
  }),
});
