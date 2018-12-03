import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
});

@withStyles(styles)
export default class OauthButton extends PureComponent {
  render() {
    const { text = 'Button', color = '#333', icon } = this.props;
    return (
      <Button
        variant="outlined"
        fullWidth
        style={{
          borderColor: color,
          // color: '#333',
          color,
          textTransform: 'capitalize',
          height: 48,
          marginBottom: 20,
          position: 'relative',
          borderRadius: 6,
          boxShadow: '0 8px 30px rgba(0,0,0,0.05)',
        }}
      >
        <img
          src={icon}
          alt={text}
          style={{
            position: 'absolute',
            left: 16,
            top: 10,
            width: 24,
            height: 24,
          }}
        />
        {text}
      </Button>
    );
  }
}
