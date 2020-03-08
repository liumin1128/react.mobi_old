import React from "react";
import GridList from "@/container/News/List/GridList";
import NavTabs from "@/components/NavTabs";
import withApollo from "@/hoc/apollo";
import withLayout from "@/hoc/layout";

function Index() {
  return (
    <>
      <NavTabs
        navList={[
          { label: "switch", pathname: "/" },
          { label: "ps4", pathname: "/ps4" },
          { label: "cosplay", pathname: "/cos" }
        ]}
      />
      <br />
      <GridList />
    </>
  );
}

export default withApollo(withLayout(Index));
