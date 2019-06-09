import React, { Fragment, PureComponent } from 'react';
import { useQuery } from 'react-apollo-hooks';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Link from '@/components/Link';
import { MZITU_TAGS } from '@/graphql/schema/mzitu';
import Loading from '@/components/Loading';

const useStyles = makeStyles(theme => ({
  media: {
    height: 0,
    paddingTop: '100%',
    borderRadius: 4,
    backgroundColor: 'rgba(0,0,0,0.03)',
  },
  content: {
    textAlign: 'center',
    '&:last-child': {
      paddingBottom: 8,
    },
  },
  progress: {
    margin: `${theme.spacing.unit * 2}px auto`,
    display: 'block',
    maxWidth: '36px',
    maxHeight: '36px',
  },
  name: {
    marginTop: 4,
    fontSize: 10,
    textAlign: 'center',
    whiteSpace:'nowrap'
  }
}));


function MzituTags() {
  const classes = useStyles();
  const { data, error, loading, refetch } = useQuery(MZITU_TAGS);

  if (loading) return <Loading />;

  if (error) {
    return (
      <div>
        {`Error! ${error.message}`}
        <Button onClick={refetch}>refetch</Button>
      </div>
    );
  }

  const { list = [] } = data;

  return (
    <Grid container spacing={2}>
      {
        list.map(i => (<Grid item xs={4} key={i.tag}>
          <Link to={`/mzitu?tag=${i.tag}`}>
            <Fragment>
              <CardMedia className={classes.media} image={i.cover} title={i.title} />
              <Typography style={classes.name} color="textSecondary" component="p">
                {i.title}
              </Typography>
            </Fragment>
          </Link>
        </Grid>))
      }
    </Grid>
  );
};

export default MzituTags;
