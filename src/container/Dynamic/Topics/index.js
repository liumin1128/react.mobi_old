import React from "react";
import dynamic from "next/dynamic";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { useQuery } from "@/hooks/graphql";
import Link from "@/components/Link";
import { QUERY_DYNAMIC_TOPIC_LIST } from "@/graphql/schema/dynamic";

const SkeletonWithNoSSR = dynamic(() => import("./Skeleton"), { ssr: false });

function Topics() {
  const { data, error, loading } = useQuery(
    QUERY_DYNAMIC_TOPIC_LIST,
    {},
    { ssr: false }
  );

  if (loading) {
    return (
      <Card>
        <Box p={2}>
          <Typography variant="subtitle2" gutterBottom>
            热门话题
          </Typography>
          <Box mt={2} />
          <SkeletonWithNoSSR />
        </Box>
      </Card>
    );
  }

  if (error) {
    return "error";
  }

  const { list = [] } = data;

  return (
    <Card>
      <Box p={2}>
        <Typography variant="subtitle2" gutterBottom>
          热门话题
        </Typography>
        <Box mx={-1.2}>
          {Array.isArray(list) &&
            list.length > 0 &&
            list.map(i => (
              <Link key={i._id} href={`/dynamic?topic=${i.number}`}>
                <Button size="small" color="primary">
                  {`#${i.title}#`}
                </Button>
              </Link>
            ))}
        </Box>
      </Box>
    </Card>
  );
}

export default Topics;
