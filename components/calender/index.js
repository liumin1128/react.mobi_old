import React, { PureComponent } from 'react';
import moment from 'moment';
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardMedia, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import TodayInHistory from './todayInHistory';

moment.locale('zh-cn');
// const localeData = moment.localeData();

console.log(moment().format('MMDD'));

const styles = theme => ({
  content: {
    // padding: 16,
  },
  items: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '16px -16px',
  },
  item: {
    width: `${100 / 7}%`,
    display: 'flex',
    justifyContent: 'center',
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
  state = {
    date: moment().format('MMDD'),
  }
  setDate = (value) => {
    this.setState({
      date: moment.unix(value).format('MMDD'),
    });
  }
  render() {
    const { date } = this.state;
    const { classes } = this.props;
    const list = new Array(35).fill('').map((_, idx) => {
      const time = moment().weekday(idx - 1);
      return {
        value: time.format('x'),
        label: time.date(),
        thisMonth: time.isSame(moment(), 'month'),
        today: time.isSame(moment(), 'day'),
      };
    });
    return (<Card>
      <CardContent className={classes.content}>
        <Typography className={classes.title} color="textSecondary">
          {moment().format('llll')}
        </Typography>
        <div className={classes.items}>
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
                  onClick={() => this.setDate(value)}
                >
                  {label}
                </Button>
              </div>
              ))
          }
        </div>

        <TodayInHistory date={date} />

      </CardContent>
    </Card>);
  }
}
