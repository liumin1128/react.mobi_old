import React from "react";
// import withLayout from "@/hoc/layout";
import Placeholder from "@/components/PlaceholderFigure";

function Error({ statusCode }) {
  if (statusCode === 404) {
    return <Placeholder.Error404 />;
  }
  return (
    <>
      <Placeholder.Error />
    </>
  );
}

Error.getInitialProps = async ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : undefined;
  return { statusCode };
};

export default Error;
