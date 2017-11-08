import React from 'react';
import Button from './index';
import Icon from '../icon';

export default ({
  children, size = 30, color = '#2196f3', icon, src, style, ...other
}) => (
  <Button
    style={{
      background: 'none',
      width: size + 15,
      height: size + 15,
      padding: 15,
    }}
    {...other}
  >
    {children || <Icon size={size} color={color} icon={icon} src={src} />}
  </Button>
);
