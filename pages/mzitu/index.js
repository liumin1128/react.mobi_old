import React from "react";
import Box from "@material-ui/core/Box";
import Content from "@/container/Mzitu/List";
import Tags from "@/container/Mzitu/List/Tags";
import Sider from "@/container/Mzitu/Sider";
import withApollo from "@/hoc/apollo";
import withLayout from "@/hoc/layout";

function Index() {
  return (
    <Box>
      <Tags />
      <br />
      <Content />
    </Box>
  );
}

Index.Sider = Sider;

export default withApollo(withLayout(Index));
