import React, { PureComponent } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Html from '@/components/Html';
import Link from '@/components/Link';
import { getStrFromHtml } from '@/utils/common';

const styles = (theme) => ({
  content: {
    cursor: 'pointer',
  },
  cover: {
    width: 120,
    height: 120,
    marginTop: 16,
    marginLeft: 8,
    borderRadius: 4,
  },
});

@withStyles(styles)
export default class Content extends PureComponent {
  render() {
    const { _id, title, html, cover, isExpanded, classes, toggleExpanded } = this.props;
    return (
      <>
        <Box px={3} pb={1}>
          {/* <Link href={`/article/detail?_id=${_id}`}>
            <Typography variant="h6" component="h3">
              {title}
            </Typography>
          </Link> */}

          <Typography variant="h6" component="h3">
            {title}
          </Typography>
        </Box>
        <Box px={3} my={'-1em'}>
          {
            isExpanded
              ? <Html html={html} />
              : (
                <Box display="flex" onClick={toggleExpanded} className={classes.content}>
                  <Typography component="div" style={{ fontSize: 16 }}>
                    <p>{getStrFromHtml(html)}</p>
                  </Typography>
                  {cover && <img className={classes.cover} src={cover} alt="" />}
                </Box>
              )
          }
        </Box>
      </>
    );
  }
}
