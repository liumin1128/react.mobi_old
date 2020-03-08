import React from "react";
import ArticleCreate from "@/container/Article/Create";
import withApollo from "@/hoc/apollo";
import withLayout from "@/hoc/layout";

function Index() {
  return (
    <>
      <ArticleCreate />
    </>
  );
}

Index.Header = () => null;
Index.maxWidth = "lg";
// Index.Sider = () => null;

export default withApollo(withLayout(Index));
