import React, { PureComponent, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Html from '@/components/Html';
import { ARTICLE_LIST } from '@/graphql/schema/article';
import { listQuery } from '@/graphql/utils';

const styles = theme => ({
  card: {
    maxWidth: 500,
    marginBottom: theme.spacing.unit * 3,
    margin: '0 auto',
  },
});

@listQuery(ARTICLE_LIST)
@withStyles(styles)
export default class test extends PureComponent {
  render() {
    const { data = {}, classes } = this.props;
    const { loading = true, error, list = [] } = data;

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
      <Fragment>

        {list.map(i => (
          <Card key={i._id} id={i._id}>
            <CardHeader
              avatar={(
                <Avatar aria-label="Recipe" className={classes.avatar}>
                  R
                </Avatar>
              )}
              action={(
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              )}
              title="Shrimp and Chorizo Paella"
              subheader="September 14, 2016"
            />
            <CardContent>
              <Typography variant="title" component="h3">
                {i.title}
              </Typography>
              <Html html={i.html} />
            </CardContent>
          </Card>
        ))}

      </Fragment>
    );
  }
}
