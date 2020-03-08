import React from "react";
import dynamic from "next/dynamic";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import withApollo from "@/hoc/apollo";
import withLayout from "@/hoc/layout";
import DynamicList from "@/container/Dynamic/List";
import DynamicCreate from "@/container/Dynamic/Create";
import DynamicTopics from "@/container/Dynamic/Topics";
import Blogrol from "@/container/Side/Blogrol";
import Project from "@/container/Side/Project";
import Code from "@/container/Side/Code";
import Footer from "@/container/Side/Footer";

const BackToTopWithNoSSR = dynamic(() => import("@/components/BackToTop"), {
  ssr: false
});

const ProfileCardWithNoSSR = dynamic(
  () => import("@/container/User/ProfileCard"),
  { ssr: false }
);

function Index() {
  return (
    <>
      <Card>
        <Box p={2}>
          <DynamicCreate />
        </Box>
      </Card>

      <Box mt={2} />

      <DynamicList />

      <BackToTopWithNoSSR />
    </>
  );
}

Index.Sider = () => (
  <>
    <ProfileCardWithNoSSR />
    <Box mt={1.5} />
    <DynamicTopics />
    <Box mt={1.5} />
    <Card>
      <Box p={2}>
        <Blogrol />
      </Box>
    </Card>
    <Box mt={1.5} />
    <Card>
      <Box p={2}>
        <Project />
      </Box>
    </Card>
    <Box mt={1.5} />
    <Card>
      <Box p={2}>
        <Code />
      </Box>
    </Card>
    <Box mt={1.5} />
    <Card>
      <Box p={2}>
        <Footer />
      </Box>
    </Card>
  </>
);

export default withApollo(withLayout(Index));
