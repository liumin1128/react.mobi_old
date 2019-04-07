import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';

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
    const { classes, title, cover, content } = this.props;
    return (
      <div>
        <div className={classes.flexGrow}>
          <div>
            <Typography variant="h6" gutterBottom>{title}</Typography>
            <Typography variant="body1" gutterBottom>{content}</Typography>
          </div>
          <CardHeader
            avatar={(
              <Avatar aria-label="Recipe">
                R
              </Avatar>
            )}
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
            style={{ paddingLeft: 0 }}
          />
        </div>
        <CardMedia style={{ paddingTop: '55%', marginBottom: 16 }} image={cover} />
        {title}
      </div>
    );
  }
}
