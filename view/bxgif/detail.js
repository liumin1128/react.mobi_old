import React, { PureComponent } from 'react';
import { Query } from 'react-apollo';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import LazyLoad from 'react-lazyload';
// import ContentLoader, { Code } from 'react-content-loader';
import { BXGIF_DETAIL } from '@/graphql/bxgif';


const styles = theme => ({
  card: {
    maxWidth: 500,
    marginBottom: theme.spacing.unit * 3,
    margin: '0 auto',
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
  media: {
    height: 0,
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
            <br />
            {detail.list.map(i => (

              <Card
                key={i.url}
                className={classes.card}
              >
                <LazyLoad
                  debounce={300}
                  unmountIfInvisible
                  placeholder={
                    <div
                      style={{ paddingTop: `${Math.floor((i.height / i.width) * 100)}%` }}
                      className={classes.load}
                    />
                  }
                >
                  <CardMedia
                    className={classes.media}
                    style={{ paddingTop: `${Math.floor((i.height / i.width) * 100)}%` }}
                    image={i.url}
                    title={`${i.width},${i.height}`}
                  />
                </LazyLoad>
                <CardContent>
                  <Typography component="p">
                    {i.title}
                  </Typography>
                </CardContent>
              </Card>

            ))}
          </div>
        );
      }}
    </Query>);
  }
}

