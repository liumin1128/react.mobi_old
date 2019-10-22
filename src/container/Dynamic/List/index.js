import React, { Fragment } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import { DYNAMIC_LIST, REMOVE_DYNAMIC } from '@/graphql/schema/dynamic';
import { USERINFO } from '@/graphql/schema/user';
import Link from '@/components/Link';
import Loading from '@/components/Loading';
import GraphQLErrors from '@/components/StatusPage/GraphQLErrors';
import Item from './Item';

function DynamicList() {
  const router = useRouter();
  const { _id } = router.query;
  const { data, error, loading, refetch } = useQuery(DYNAMIC_LIST, { variables: { _id } });
  const { data: userInfoData, loading: userInfoLoading } = useQuery(USERINFO, { ssr: false });

  if (loading) return <Loading />;
  if (error) return <GraphQLErrors error={error} />;

  // const userInfo = userInfoData ? userInfoData.userInfo : undefined;

  const { list } = data;


  return (
    <>
      {list.map((i) => (
        <Fragment key={i._id}>
          <Item {...i} />
        </Fragment>
      ))}
    </>
  );
}


export default DynamicList;
