import React, { Fragment } from 'react';
import { strategy, hasMark, getMark } from './utils';

const Button = ({
  value, onChange, type, icon,
}) => {
  // console.log(getMark(value).data.get('align') === type);
  const active = hasMark(value, type);
  return (
    <span
      className="button"
      onMouseDown={(e) => {
        e.preventDefault();
        onChange(strategy(value.change(), type));
      }}
      data-active={active}
    >
      <span className="material-icons">{icon}</span>
    </span>
  );
};

export default ({ value, onChange }) => (
  <Fragment>
    <Button value={value} onChange={onChange} type="bold" icon="format_bold" />
    <Button value={value} onChange={onChange} type="italic" icon="format_italic" />
    <Button value={value} onChange={onChange} type="underlined" icon="format_underlined" />
    <Button value={value} onChange={onChange} type="code" icon="code" />
  </Fragment>
);

