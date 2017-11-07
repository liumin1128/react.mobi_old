import React from 'react';
import Button from '../button';
import Icon from '../icon';

export default ({
  children,
  active,
  showLabels,
  value,
  label,
  size = 30,
  color = '#2196f3',
  icon,
  src,
  style,
  onChange,
  ...other
}) => (
  <Button
    style={{
      background: 'none',
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      // flexDirection: 'column',
      justifyContent: 'center',
      ...style,
    }}
    onClick={() => onChange(value)}
    {...other}
  >
    {children || <Icon
      size={showLabels ? 25 : size}
      color={active ? color : '#ccc'}
      icon={icon}
      src={src}
    />}
    {showLabels ? <span style={{
      fontSize: 10,
      color: active ? color : '#ccc',
      marginTop: 2,
    }}
    >{label}</span> : undefined}
  </Button>
);
