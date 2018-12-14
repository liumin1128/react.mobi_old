import React, { PureComponent } from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Html from '@/components/Html';

const styles = theme => ({
  content: {
    cursor: 'pointer',
  },
});

@withStyles(styles)
export default class Content extends PureComponent {
  render() {
    const { title, html, isExpanded, classes, toggleExpanded } = this.props;

    if (isExpanded) {
      return (
        <CardContent style={{ paddingTop: 8, paddingBottom: 0 }}>
          <Typography variant="h6" component="h3">
            {title}
          </Typography>
          <Html html={html} />
        </CardContent>
      );
    }
    return (
      <CardContent style={{ paddingTop: 8, paddingBottom: 0 }} onClick={toggleExpanded} className={classes.content}>
        <Typography variant="h6" component="h3">
          {title}
        </Typography>
        <Typography component="div" style={{ fontSize: 16 }}>
          <p>
            {`${html
              .replace(/<[^>]+>/g, '')
              .substring(0, 150)}......`}
          </p>
        </Typography>
      </CardContent>
    );
  }
}
