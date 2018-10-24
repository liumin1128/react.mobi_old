import React, { PureComponent } from 'react';
import { Mutation } from 'react-apollo';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import CircularProgress from '@material-ui/core/CircularProgress';
import { DELETE_ARTICLE } from '@/graphql/schema/article';
import Snackbar from '@/components/snackbar';

const styles = theme => ({
  menuItem: {
    // '&:focus': {
    //   backgroundColor: theme.palette.primary.main,
    //   '& $primary, & $icon': {
    //     color: theme.palette.common.white,
    //   },
    // },
  },
  primary: {},
  icon: {},
});

@withStyles(styles)
export default class Delete extends PureComponent {
  // handleClose = async () => {
  //   try {
  //     const { id, mutate } = this.props;
  //     const { data: { result: { status, message } } } = await mutate({
  //       variables: { id },
  //       refetchQueries: ['ArticleList'],
  //     });
  //     Snackbar.success(`[${status}]${message}`);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  render() {
    const { classes } = this.props;
    return (
      <Mutation mutation={DELETE_ARTICLE}>
        {(deleteArticle, { loading, error, data = {} }) => {
          const onDelete = async () => {
            try {
              const { id } = this.props;

              const { data: { result: { status, message } } } = await deleteArticle({
                variables: { id },
                refetchQueries: ['ArticleList'],
              });

              Snackbar.success(`[${status}]${message}`);
            } catch (err) {
              console.log('err');
              console.log(err);
            }
          };

          return (
            <MenuItem className={classes.menuItem} onClick={onDelete}>
              <ListItemIcon className={classes.icon}>
                {loading ? <CircularProgress color="inherit" size={20} thickness={5} /> : <DeleteIcon /> }
              </ListItemIcon>
              <ListItemText classes={{ primary: classes.primary }} inset primary={loading ? '删除中' : '删除'} />
            </MenuItem>
          );
        }}
      </Mutation>
    );
  }
}
