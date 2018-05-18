import React, { PureComponent } from 'react';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TodayInHistory from './todayInHistory';

moment.locale('zh-cn');
// const localeData = moment.localeData();

const styles = theme => ({
  items: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '16px -16px -16px',
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
    date: moment(),
    open: false,
  }
  setDate = (value) => {
    this.setState({
      date: moment(parseInt(value, 0)),
    });
  }
  render() {
    const { date, open } = this.state;
    const { classes } = this.props;
    const list = new Array(35).fill('').map((_, idx) => {
      const time = moment().weekday(idx - 1);
      return {
        value: time.format('x'),
        label: time.date(),
        thisMonth: time.isSame(moment(), 'month'),
        today: time.isSame(moment(), 'day'),
        selected: time.isSame(date.format('YYYY-MM-DD'), 'day'),
      };
    });
    return (<Card>
      <CardContent>
        <Typography color="textSecondary">
          {moment().format('llll')}
        </Typography>
        <div className={classes.items}>
          {
            list.map(({ value, label, thisMonth, today, selected }) => (
              <div
                key={value}
                className={classes.item}
              >
                <Button
                  className={classes.button}
                  variant={(today || selected) ? 'raised' : 'flat'}
                  color={today ? 'primary' : (selected ? 'secondary' : 'default')}
                  disabled={!thisMonth}
                  onClick={() => this.setDate(value)}
                >
                  {label}
                </Button>
              </div>
              ))
          }
        </div>


      </CardContent>
      <CardActions>
        <Button
          onClick={() => {
              this.setState({
                open: !open,
              });
            }}
          size="small"
          color="primary"
        >
            历史上的今天
        </Button>
      </CardActions>
      {open && <CardContent>
        <TodayInHistory date={date.format('MMDD')} />
      </CardContent>}

    </Card>);
  }
}
