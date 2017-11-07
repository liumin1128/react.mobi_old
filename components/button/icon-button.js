import React from 'react';
import Button from './index';
import Icon from '../icon';

export default ({
  children, size = 30, color = '#2196f3', icon, src, style, ...other
}) => (
  <Button
    style={{
      background: 'none',
      width: 'auto',
      height: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      ...style,
    }}
    {...other}
  >
    {children || <Icon size={size} color={color} icon={icon} src={src} />}
  </Button>
);
