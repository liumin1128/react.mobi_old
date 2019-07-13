import React, { Fragment, useState } from 'react';
import Box from '@material-ui/core/Box';
import ButtonBase from '@material-ui/core/ButtonBase';
import Divider from '@material-ui/core/Divider';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import useStyles from './styles';
import emojiList from './data'

function Topics({ onClick }) {
  const classes = useStyles();
  const [ emoji, setEmoji ] = useState('xjh');
  function handleChange(_,value) {
    setEmoji(value)
  }
  return (
    <Fragment>
      {
        emojiList.map(i => emoji === i.id ? <Box
        key={i.id} 
        className={classes.box}
        display="flex" 
        flexWrap="wrap"
        alignContent="flex-start"
      >
        {
          i.list.map(j => (<ButtonBase key={j.url} onClick={() => {onClick(j)}}>
            <figure 
              className={classes.item} 
              style={{backgroundImage: `url(${j.url})`}} 
            />
          </ButtonBase>))
        }
      </Box> : null)
      }
      <Box mt={1}></Box>
      <Divider></Divider>
      <Tabs value={emoji} onChange={handleChange}>
        {
          emojiList.map(i => <Tab 
            key={i.id}
            value={i.id}
            className={classes.tab}
            icon={<figure 
              className={classes.item} 
              style={{backgroundImage: `url(${i.cover})`,border: 'none' }} 
            />}
          />)
        }
      </Tabs>
    </Fragment>
  );
}

export default Topics;
