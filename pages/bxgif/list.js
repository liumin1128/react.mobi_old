import React from "react";
import Content from "@/container/Bxgif/List";
import withApollo from "@/hoc/apollo";
import withLayout from "@/hoc/layout";

function Index() {
  return <Content />;
}

export default withApollo(withLayout(Index));
