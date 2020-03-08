import React, { PureComponent } from "react";
import Layout from "@/components/Layout/Base";
import List from "@/container/explore/list";
import withApollo from "@/hoc/apollo";
import withLayout from "@/hoc/layout";

class Index extends PureComponent {
  render() {
    return (
      <Layout>
        <List />
      </Layout>
    );
  }
}

export default withApollo(withLayout(Index));
