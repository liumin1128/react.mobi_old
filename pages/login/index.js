import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Login from '@/view/login';

const styles = {
  card: {
    maxWidth: 500,
    margin: 'auto',
  },
};


@withStyles(styles)
export default class LoginPage extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Card className={classes.card}>
          <CardMedia />
          <CardContent>
            <Login />
          </CardContent>
        </Card>
      </div>
    );
  }
}
