import React from 'react';
import { useQuery } from '@/hooks/graphql';
import { USERINFO, USERINFO_BY_ID } from '@/graphql/schema/user';
import Skeleton from './Skeleton';
import ProfileCard from './ProfileCard';
import Sign from './Sign';

function EditeUserInfo({ _id }) {
  const { data, loading, error } = useQuery(
    _id ? USERINFO_BY_ID : USERINFO,
    _id ? { _id } : {},
    { ssr: false },
  );

  if (loading) return <Skeleton />;

  if (error) return <Sign />;

  const { userInfo } = data;

  return <ProfileCard userInfo={userInfo} />;
}

export default EditeUserInfo;
