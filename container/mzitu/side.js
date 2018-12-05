import React, { PureComponent, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import SearchBar from './searchBar';
import Tags from './tagsSmall';

const styles = theme => ({
  tags: {
    padding: theme.spacing.unit * 2,
  },
});

@withStyles(styles)
export default class News extends PureComponent {
  static async getInitialProps({ query }) {
    return { query };
  }

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Card>
          <CardContent className={classes.tags}>
            <SearchBar />
          </CardContent>
        </Card>
        <Card>
          <CardContent className={classes.tags}>
            <Tags />
          </CardContent>
        </Card>
      </Fragment>
    );
  }
}
