import { graphql } from 'react-apollo';
import { QINIU_TOKEN } from '@/graphql/schema/qiniu';

export default graphql(QINIU_TOKEN, { ssr: false });
