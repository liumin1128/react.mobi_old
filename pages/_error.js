import React from 'react';
import Page404 from '@/components/StatusPage/404';
import PageError from '@/components/StatusPage/error';

function Error({ statusCode, ...props }) {
  if (statusCode == 404) {
    return (
      <Page404 />
    );
  }
  return (
    <>
      <PageError
        title={statusCode}
        content={statusCode
          ? `An error ${statusCode} occurred on server`
          : 'An error occurred on client'}
      />
    </>
  );
}

Error.getInitialProps = async ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : undefined;
  console.log(`${statusCode}: ${res.req.url}`);
  return { statusCode };
};

export default Error;
