import { QINIU_TOKEN } from '@/graphql/schema/qiniu';
import { QINIUURL, QINIU_UPLOADURL } from '@/config/base';
import { useQuery } from '@/hooks/graphql';

export default function useQiniuUpload() {
  const [ data, loading ] = useQuery(QINIU_TOKEN);
  return {
    token: data,
    loading,
    action: QINIU_UPLOADURL,
    qiniuUrl: QINIUURL,
  };
}
