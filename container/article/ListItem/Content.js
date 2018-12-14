import React, { PureComponent, Fragment } from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Html from '@/components/Html';
import Link from '@/components/Link';
import { getStrFromHtml } from '@/utils/common';

const styles = theme => ({
  content: {
    cursor: 'pointer',
    paddingTop: 0,
    paddingBottom: 0,
  },
});

@withStyles(styles)
export default class Content extends PureComponent {
  render() {
    const { _id, title, html, isExpanded, classes, toggleExpanded } = this.props;

    return (
      <Fragment>
        <CardContent style={{ paddingTop: 8, paddingBottom: 0 }}>
          <Link href={`/article/detail?_id=${_id}`}>
            <Typography variant="h6" component="h3">
              {title}
            </Typography>
          </Link>
        </CardContent>
        <CardContent onClick={toggleExpanded} className={classes.content}>
          {
            isExpanded
              ? <Html html={html} />
              : (
                <Typography component="div" style={{ fontSize: 16 }}>
                  <p>{getStrFromHtml(html)}</p>
                </Typography>
              )
          }
        </CardContent>
      </Fragment>
    );
  }
}
