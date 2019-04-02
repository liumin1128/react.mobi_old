import React, { PureComponent } from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import Link from '@/components/Link';

const styles = theme => ({
  btn: {
    width: 60,
    height: 60,
    flexDirection: 'column',
    borderRadius: 5,
  },
  btnText: {
    fontSize: 12,
    fontWeight: 500,
  },
  button: {
    width: '100%',
  },
});

@withStyles(styles)
export default class Edite extends PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <Link href="/article/create" passHref scroll={false}>
        <Button variant="outlined" color="primary" className={classes.button}>
          写文章
        </Button>
      </Link>
    );
  }
}
