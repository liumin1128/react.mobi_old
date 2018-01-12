import React from 'react';
import Input from '../../components/input';
import SleepButton from './sleepButton';

export const renderField = (field) => {
  const {
    input, label, meta: { touched, error, dirty }, ...other
  } = field;
  return (<div>
    <Input {...input} {...other} />
  </div>);
};

export const renderFieldPhone = (field) => {
  const {
    input, label, meta: { touched, error, dirty }, ...other
  } = field;
  return (<div style={{ position: 'relative' }}>
    <select
      defaultValue="+86"
      style={{
        width: 100,
        height: 49,
        border: 'none',
        background: 'none',
        paddingLeft: 16,
        position: 'absolute',
        left: 0,
        top: 0,
        display: 'block',
        zIndex: 10,
      }}
    >
      <option value="+86">中国 +86</option>
      <option value="+1">美国 +1</option>
    </select>
    <Input {...input} {...other} />
  </div>);
};

export const renderFieldCode = (field) => {
  const {
    input, label, meta: { touched, error = {}, dirty }, sentSMS, ...other
  } = field;
  return (<div style={{ position: 'relative' }}>
    <Input {...input} {...other} />
    <SleepButton
      disabled={error.error}
      onClick={() => { sentSMS(error.phone); }}
      style={{ position: 'absolute', right: 8, top: 6 }}
    />
  </div>);
};
