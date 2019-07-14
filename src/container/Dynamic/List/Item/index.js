import React, { Fragment } from 'react';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Link from '@/components/Link';
// import Html from '@/components/Html';
import { getTimeAgo } from '@/utils/common';
import useStyles from './styles';
import { html2text, text2html } from '../../utils';


function DynamicListItem({ _id, content, pictures = [], topics, user, createdAt, ...props }) {
  const classes = useStyles();
  console.log('topics');
  console.log(topics);

  // function text2html(str) {
  //   return str
  //     .replace(/(.*?)\[(.*?)_(.*?)]/ig, '$1<img src="https://imgs.react.mobi/emoticon/$2/$3.gif" class="emoji" alt="[$2_$3]">')
  //     .replace(/(.*?)\n(.*?)/ig, '$1<div>$2</div>');
  //   // .replace(/(.*?)#(.*?)#(.*?)/ig, '$1<a href="/">$2</a>$3');
  // }

  let html = text2html(content);

  topics.map((i) => {
    const reg = new RegExp(`#${i.title}#`);
    console.log('reg');
    console.log(reg);
    html = html.replace(reg, `<a href="${i.number}">${i.title}</a>`);
  });

  console.log('html');
  console.log(html);

  return (
    <Fragment key={_id}>
      <Link href={`/dynamic/detail?_id=${_id}`}>
        <Card className={classes.card}>
          <CardHeader
            avatar={(<Avatar aria-label="Avatar" src={user.avatarUrl} className={classes.avatar}>{user.nickname}</Avatar>)}
            action={(
              <IconButton aria-label="Settings">
                <MoreVertIcon />
              </IconButton>
            )}
            title={<Typography variant="h6" className={classes.nickname}>{user.nickname}</Typography>}
            subheader={getTimeAgo(createdAt)}
          />
          <Box ml={10}>
            <CardContent className={classes.content}>
              <Typography variant="body2" gutterBottom component="div">
                <div className={classes.html} dangerouslySetInnerHTML={{ __html: html }} />
              </Typography>
              <Box display="flex" m={-0.5}>
                {pictures.map(i => <CardMedia key={i} className={classes.picture} image={i} />)}
              </Box>
            </CardContent>
          </Box>
        </Card>
      </Link>
      <Box mb={1.5} />
    </Fragment>
  );
}


export default DynamicListItem;
