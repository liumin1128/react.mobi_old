import React from 'react';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

export default function () {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="subtitle2" gutterBottom>
          友情链接
      </Typography>
      <Typography variant="body2" gutterBottom>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.xiaoduyu.com"
          className={classes.a}
        >
            小度鱼 - xiaoduyu.com
        </a>
      </Typography>
      <Typography variant="body2" gutterBottom>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://liumin.me"
          className={classes.a}
        >
            八岁的博客 - liumin.me
        </a>
      </Typography>
    </div>
  );
}
