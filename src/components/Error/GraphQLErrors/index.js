import PageError from "src/components/Error/error";
import Page404 from "src/components/Error/404";
import get from "lodash/get";

export default ({ error, action }) => {
  const errorCode = get(error, "graphQLErrors[0].extensions.code");
  if (errorCode === 404) {
    return <Page404 action={action} content={error.graphQLErrors[0].message} />;
  }
  return <PageError action={action} />;
};
