
import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Link from '@/components/Link';
import { useMutation } from '@/hooks/graphql';
import { DYNAMIC_TOPIC_LIST } from '@/graphql/schema/dynamic';
import { useOnMount } from '@/hooks';

function Topics() {
  const [ topics, setTopics ] = useState([]);
  const [ getTopics ] = useMutation(DYNAMIC_TOPIC_LIST, {}, {
    update: (_, { data }) => {
      setTopics(data.list);
    },
  });
  useOnMount(() => {
    getTopics();
  });
  return (
    <Card>
      <Box p={2}>
        <Typography variant="subtitle2" gutterBottom>热门话题</Typography>
        <Box mx={-1.2}>
          {topics.length > 0 && topics.map(i => (
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
