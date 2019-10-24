import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { USERINFO } from '@/graphql/schema/user';
import Skeleton from './Skeleton';
import ProfileCard from './ProfileCard';
import Sign from './Sign';

function EditeUserInfo() {
  const { data, loading, error } = useQuery(USERINFO);

  if (loading) return <Skeleton />;

  if (error) return <Sign />;

  const { userInfo } = data;

  return <ProfileCard userInfo={userInfo} />;
}

export default EditeUserInfo;
