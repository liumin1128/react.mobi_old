import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@/hooks/graphql';
import { DYNAMIC_DETAIL } from '@/graphql/schema/dynamic';
import { USERINFO } from '@/graphql/schema/user';
import Loading from '@/components/Loading';
import GraphQLErrors from '@/components/StatusPage/GraphQLErrors';
import Detail from './detail';

function DynamicDetail() {
  const router = useRouter();
  const { _id } = router.query;
  const { data, error, loading } = useQuery(DYNAMIC_DETAIL, { _id }, { sss: false });
  const { data: userInfoData } = useQuery(USERINFO, {}, { ssr: false });

  if (loading) return <Loading />;
  if (error) return <GraphQLErrors error={error} />;

  const userInfo = userInfoData ? userInfoData.userInfo : undefined;

  return (
    <>
      <Detail
        data={data.data}
        userInfo={userInfo}
      />
    </>
  );
}


export default DynamicDetail;
