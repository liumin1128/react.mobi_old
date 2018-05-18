import React, { PureComponent } from 'react';
import { Query } from 'react-apollo';
import Link from 'next/link';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { MZITU_TAGS } from '@/graphql/mzitu';

const styles = theme => ({
  media: {
    height: 0,
    paddingTop: '100%',
  },
  content: {
    textAlign: 'center',
    '&:last-child': {
      paddingBottom: 8,
    },
  },
});

@withStyles(styles)
export default class MeizituDetail extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <Query
        query={MZITU_TAGS}
      >
        {({ loading, error, data = {} }) => {
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;

        const { list = [] } = data;

        if (list.length === 0) return 'Loading...';

        const randomIdx = Math.floor((list.length - 18) * Math.random());
        const result = list.slice(randomIdx, randomIdx + 18);

        return (
          <div>
            <Card>
              <CardContent className={classes.content}>
                <Grid container spacing={16}>
                  {
                    result
                      .map(i => (<Grid
                        item
                        xs={4}
                      >
                        <Link href={`/mzitu?tag=${i.tag}`}>
                          <a>

                            <CardMedia
                              className={classes.media}
                              image={i.cover}
                              title={i.title}
                            />

                            <Typography style={{ marginTop: 4 }} color="textSecondary" component="p">
                              {i.title}
                            </Typography>

                          </a>
                        </Link>
                      </Grid>
                        ))
                      }
                </Grid>
              </CardContent>

            </Card>
          </div>
        );
      }}
      </Query>);
  }
}

