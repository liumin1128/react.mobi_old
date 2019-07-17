import React, { Fragment, useState } from 'react';
import Box from '@material-ui/core/Box';
import ButtonBase from '@material-ui/core/ButtonBase';
import Divider from '@material-ui/core/Divider';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import useStyles from './styles';
import emojiList from './data'
import ywzlist from './ywz'

function Topics({ insetEmoji, insetText }) {
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
          i.list.map(j => (<ButtonBase key={j.url} onClick={() => {insetEmoji(j)}}>
            <figure 
              className={classes.item} 
              style={{backgroundImage: `url(${j.url})`, backgroundSize: i.size }} 
            />
          </ButtonBase>))
        }
      </Box> : null)
      }
      {emoji === 'ywz' && <Box display="flex" flexWrap="wrap" className={classes.box} style={{overflowY: 'scroll'}}>
        {ywzlist.map(i => <Box p={1} onClick={() => {insetText(i)}}>{i}</Box>)}
      </Box>}
      <Box mt={1}></Box>
      <Divider></Divider>
      <Tabs value={emoji} onChange={handleChange}>
        {
          emojiList.map(i => <Tab 
            key={i.id}
            value={i.id}
            // label={i.name}
            className={classes.tab}
            icon={<figure style={{backgroundImage: `url(${i.cover})`,border: 'none' }}  />}
          />)
        }
        <Tab 
            value="ywz"
            label="(￣^￣)"
            className={classes.tab}
            // icon={<figure style={{backgroundImage: `url(${i.cover})`,border: 'none' }}  />}
          />
      </Tabs>
    </Fragment>
  );
}

export default Topics;
