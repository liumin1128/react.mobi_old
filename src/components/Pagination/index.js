import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  list: {
    display: 'flex',
    justifyContent: 'center',
    margin: -theme.spacing.unit * 0.5,
  },
  item: {
    minHeight: 32,
    lineHeight: '32px',
    textAlign: 'center',
    minWidth: 32,
    display: 'inline-block',
    padding: 0,
    margin: theme.spacing.unit * 0.5,
  },
});

@withStyles(styles)
export default class Pagination extends PureComponent {
  render() {
    const { classes, onChange, page = 1, pageSize = 5, total = 0 } = this.props;
    if (total <= pageSize) return null;
    const num = Math.ceil(total / pageSize, 0);
    const list = new Array(num).fill().map((_, index) => index + 1);

    return (
      <div className={classes.list}>
        {
          list.map(i => (
            <Button
              key={i}
              onClick={() => { onChange(i); }}
              className={classes.item}
              variant="outlined"
              color={i === page ? 'primary' : 'default'}
            >
              {i}
            </Button>
          ))
        }
      </div>
    );
  }
}
