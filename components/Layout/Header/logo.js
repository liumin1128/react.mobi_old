import React, { PureComponent } from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';

// https://imgs.react.mobi/FjpmLe9it1pTemLeB2w5XgDhv1D-
// https://imgs.react.mobi/Fi6oyHGOpFKKAjNJilB5LSeTRurZ
// https://imgs.react.mobi/FldU5XAVJksEDNDEs7MZiF36DMAz

const styles = theme => ({
  logo: {
    marginRight: 16,
    [theme.breakpoints.down('xs')]: {
      marginLeft: 16,
    },
  },
});

@withStyles(styles)
export default class Logo extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <ButtonBase centerRipple className={classes.logo}>
        <Avatar src="https://imgs.react.mobi/FldU5XAVJksEDNDEs7MZiF36DMAz" />
      </ButtonBase>
    );
  }
}
