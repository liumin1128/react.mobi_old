import React, { PureComponent } from 'react';
import { Query } from 'react-apollo';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import LazyLoad from 'react-lazyload';
import { updateQuery } from '@/graphql/index';
import LoadMore from '@/components/loadmore';
// import ContentLoader, { Code } from 'react-content-loader';
import { DOYOGIF_DETAIL } from '@/graphql/doyogif';

const styles = theme => ({
  root: {
    maxWidth: 700,
    margin: '0 auto',
  },
  media: {
    height: 'auto',
    width: '100%',
  },
});

@withStyles(styles)
export default class MeizituDetail extends PureComponent {
  render() {
    const { query = {} } = this.props;
    const { id: _id, skip = 0 } = query;
    const { classes } = this.props;
    return (<Query query={DOYOGIF_DETAIL} variables={{ _id }}>
      {({ loading, error, data = {}, fetchMore }) => {
        const { list = [] } = data;
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;

        const loadMore = () => fetchMore({
          variables: { skip: list.length + skip },
          updateQuery,
        });

        return (
          <div className={classes.root}>
            {
              list.map(i => (<Card>
                <img className={classes.media} src={i.src} alt="" />
                <CardContent>
                  <Typography className={classes.title} component="p" >
                    {i.title}
                  </Typography>
                </CardContent>
              </Card>))
            }
            <LoadMore onEnter={loadMore} />
          </div>
        );
      }}
    </Query>);
  }
}

