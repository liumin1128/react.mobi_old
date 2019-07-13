import React, { Fragment, useState } from 'react';
import InputBase from '@material-ui/core/InputBase';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import Divider from '@material-ui/core/Divider';
// import InboxIcon from '@material-ui/icons/Inbox';
// import DraftsIcon from '@material-ui/icons/Drafts';
import { useMutation } from '@/hooks/graphql';
import { DYNAMIC_TOPIC_LIST } from '@/graphql/schema/dynamic';
// import { useOnMount } from '@/hooks';
import useStyles from './styles';

function Topics({ onClick }) {
  const [ topics, setTopics ] = useState([]);
  const getTopics = useMutation(DYNAMIC_TOPIC_LIST, {}, {
    update: (_, { data }) => {
      setTopics(data.list);
    },
  });
  const classes = useStyles();
  // useOnMount(() => {
  //   getTopics();
  // });
  return (
    <Fragment>
      <InputBase
        classes={{
          root: classes.root,
          input: classes.input,
        }}
        onChange={(e) => {
          getTopics({ title: e.target.value });
        }}
      />
      {
        topics.length > 0 && (
        <List component="nav" aria-label="Main mailbox folders">
          {topics.map(i => (
            <ListItem key={i._id} button onClick={() => onClick(i)}>
              <ListItemText primary={`#${i.title}#`} />
            </ListItem>
          ))}
        </List>
        )
      }

    </Fragment>
  );
}

export default Topics;
