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
import { getTimeAgo } from '@/utils/common';
import useStyles from './styles';
import { text2html } from '../../utils';


function DynamicListItem({ _id, content, pictures = [], topics, user, createdAt, ...props }) {
  const classes = useStyles();

  let html = text2html(content);

  topics.map((i) => {
    const reg = new RegExp(`#${i.title}#`);
    html = html.replace(reg, `<a href="/dynamic?topic=${i.number}" class="MuiTypography-root MuiLink-root MuiLink-underlineNone MuiTypography-colorPrimary">#${i.title}#</a>`);
  });

  return (
    <Fragment key={_id}>
      {/* <Link href="/aaa">1111</Link> */}
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
            <Box display="flex" m={-0.5} mt={1}>
              {pictures.map(i => <CardMedia key={i} className={classes.picture} image={i} />)}
            </Box>
          </CardContent>

          <Box pb={2}>
            1111
          </Box>
        </Box>

      </Card>
      <Box mb={1.5} />
    </Fragment>
  );
}

export default DynamicListItem;
