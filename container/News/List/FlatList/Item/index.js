import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import { getLessStr } from '@/utils/common';

const styles = theme => ({
  media: {
    display: 'block',
    width: 64,
    height: 64,
  },
  content: {
    flex: 1,
  },
  card: {
    display: 'flex',
    marginBottom: 16,
  },
  flexGrow: {
    flex: 1,
    paddingRight: 16,
  },
});

@withStyles(styles)
export default class Item extends PureComponent {
  render() {
    const {
      classes,
      id,
      title,
      date,
      description,
      source,
      html,
      labels,
      photos,
      cover,
      tags,
    } = this.props;
    return (
      <div>
        <div className={classes.flexGrow}>
          <div>
            <Typography variant="h6" gutterBottom>{title}</Typography>
            <Typography variant="body1" gutterBottom>{getLessStr(description, 140)}</Typography>
          </div>
          <CardHeader
            avatar={(
              <Avatar aria-label="Recipe">
                {source[0]}
              </Avatar>
            )}
            title={source}
            subheader={date}
            style={{ paddingLeft: 0 }}
          />
        </div>
        <CardMedia style={{ paddingTop: '55%', marginBottom: 16 }} image={cover} />
      </div>
    );
  }
}
