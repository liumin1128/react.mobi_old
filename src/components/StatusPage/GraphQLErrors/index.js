import PageError from '@/components/StatusPage/error';
import Page404 from '@/components/StatusPage/404';

export default ({ error, action }) => {
  console.log('error');
  console.log(error);
  if (error) {
    if (error.graphQLErrors[0].extensions.code === 404) {
      return (
        <Page404
          action={action}
          content={error.graphQLErrors[0].message}
        />
      );
    }
    return (
      <PageError
        action={action}
        title={error.graphQLErrors[0].message}
      />
    );
  }
  return (
    <PageError
      action={action}
    />
  );
};
