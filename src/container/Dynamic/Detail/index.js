import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import { DYNAMIC_DETAIL, REMOVE_DYNAMIC } from '@/graphql/schema/dynamic';
import { USERINFO } from '@/graphql/schema/user';
import Loading from '@/components/Loading';
import GraphQLErrors from '@/components/StatusPage/GraphQLErrors';
import Detail from './detail';

function DynamicDetail() {
  const router = useRouter();
  const { _id } = router.query;
  const { data, error, loading, refetch } = useQuery(DYNAMIC_DETAIL, { variables: { _id } });
  const { data: userInfoData, loading: userInfoLoading } = useQuery(USERINFO);

  if (loading || userInfoLoading) return <Loading />;
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
