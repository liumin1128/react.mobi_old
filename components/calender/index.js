import React, { PureComponent } from 'react';
import moment from 'moment';
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardMedia, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { auto } from 'async';

moment.locale('zh-cn');
// const localeData = moment.localeData();

const styles = theme => ({
  content: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: 16,
  },
  item: {
    width: `${100 / 7}%`,
  },
  button: {
    minHeight: 'auto',
    minWidth: 'auto',
    borderRadius: 100,
    width: '2.5em',
    height: '2.5em',
    padding: 0,
  },
});

@withStyles(styles)
export default class Calender extends PureComponent {
  render() {
    const list = new Array(35).fill('').map((_, idx) => {
      const time = moment().weekday(idx - 1);
      return {
        value: time.format('x'),
        label: time.date(),
        thisMonth: time.isSame(moment(), 'month'),
        today: time.isSame(moment(), 'day'),
      };
    });
    console.log(list);
    const { classes } = this.props;
    return (<Card>
      <CardContent className={classes.content}>
        {
          list.map(({ value, label, thisMonth, today }) => (
            <div
              key={value}
              className={classes.item}
            >
              <Button
                className={classes.button}
                variant={today ? 'raised' : ''}
                color={today ? 'primary' : ''}
                disabled={!thisMonth}
              >
                {label}
              </Button>
            </div>
            ))
        }
      </CardContent>
    </Card>);
  }
}
