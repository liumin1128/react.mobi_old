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
import nossr from '@/hoc/nossr';

const styles = theme => ({
  root: {
    maxWidth: 700,
    margin: '0 auto',
  },
  media: {
    height: 'auto',
    width: '100%',
  },
  load: {
    padding: 0,
    margin: '0 auto',
    display: 'block',
    width: '100%',
    height: 0,
    overflow: 'hidden',
    background: 'rgba(0,0,0,0.05)',
  },
});


@nossr
@withStyles(styles)
export default class MeizituDetail extends PureComponent {
  state = {}
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
              list.map((i) => {
                const paddingTop = this.state[i.src] || '50%';
                return (<Card key={i.src}>
                  <LazyLoad
                    debounce={300}
                    unmountIfInvisible
                    placeholder={<div style={{ paddingTop }} className={classes.load} />}
                  >
                    {
                      (() => {
                        if (!this.state[i.src]) {
                          const img = new Image();
                          img.src = i.src;
                          const check = () => {
                            if (img.width > 0 || img.height > 0) {
                              const value = `${Math.floor((img.height / img.width) * 100)}%`;
                              this.setState({ [i.src]: value });
                              clearInterval(set);
                            }
                          };
                          const set = setInterval(check, 40);
                        }
                        return (<CardMedia
                          className={classes.media}
                          style={{ paddingTop }}
                          image={i.src}
                        />);
                      })()
                    }
                  </LazyLoad>
                  <CardContent>
                    <Typography className={classes.title} component="p" >
                      {i.title}
                    </Typography>
                  </CardContent>
                </Card>);
              })
            }
            <LoadMore onEnter={loadMore} />
          </div>
        );
      }}
    </Query>);
  }
}

