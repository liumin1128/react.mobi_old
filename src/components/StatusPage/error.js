import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@/components/Link';
import Image from './images/undraw_server_down_s4lk.svg';
import useStyles from './styles';

const defaultTitle = 'ERROR';
const defaultContent = '啊哦，出现了意料之外的错误';
const defaultAction = <Link href="/"><Button>返回首页</Button></Link>;

export default ({ title = defaultTitle, content = defaultContent, action = defaultAction }) => {
  const classes = useStyles();
  return (
    <>
      <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center">
        <Box maxWidth={600} maxHeight={600} py={12} className={classes.root}>
          <Image className={classes.image} />
        </Box>
        <Typography align="center" variant="h6">{title}</Typography>
        <Typography align="center" variant="body2">{content}</Typography>
        <Box mt={2} />
        {action}
      </Box>
    </>
  );
};
