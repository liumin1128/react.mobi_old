import React, { Fragment } from 'react';
import { alignmentMarkStrategy, hasMark, getMark } from './utils';

const Button = ({
  value, onChange, changeState, className, style, type,
}) => {
  // console.log(hasMark(value));
  // console.log(getMark(value).data.get('align') === type);
  const active = hasMark(value) && getMark(value).data.get('align') === type;
  return (
    <span
      className="button"
      onMouseDown={e => onChange(alignmentMarkStrategy(value.change(), type))}
      data-active={active}
    >
      <span className="material-icons">{`format_align_${type}`}</span>
    </span>
  );
};

export default ({ value, onChange }) => (
  <Fragment>
    <Button value={value} onChange={onChange} type="left" />
    <Button value={value} onChange={onChange} type="center" />
    <Button value={value} onChange={onChange} type="right" />
  </Fragment>
);

