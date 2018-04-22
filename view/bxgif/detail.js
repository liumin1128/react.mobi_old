import React, { PureComponent } from 'react';
import { Query } from 'react-apollo';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import LazyLoad from 'react-lazyload';
import ContentLoader, { Code } from 'react-content-loader';
import { BXGIF_DETAIL } from '../../graphql/bxgif';


const styles = theme => ({
  card: {
    maxWidth: 345,
    marginBottom: 32,
    margin: '0 auto',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
});
@withStyles(styles)
export default class MeizituDetail extends PureComponent {
  render() {
    const _id = this.props.query.id;
    const { classes } = this.props;
    return (<Query query={BXGIF_DETAIL} variables={{ _id }}>
      {({ loading, error, data = {} }) => {
        const { detail = {} } = data;
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;
        return (
          <div className={classes.root}>

            <h3>{detail.title}</h3>
            {detail.list.map(i => (
              <LazyLoad
                debounce={300}
                key={i.url}
                height={i.height}
                placeholder={<Code />}
              >
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.media}
                    style={{ paddingTop: `${Math.floor((i.height / i.width) * 100)}%` }}
                    image={i.url}
                    title={`${i.width},${i.height}`}
                  />
                  <CardContent>
                    <Typography component="p">
                      {i.title}
                    </Typography>
                  </CardContent>
                </Card>
              </LazyLoad>
            ))}
          </div>
        );
      }}
    </Query>);
  }
}

