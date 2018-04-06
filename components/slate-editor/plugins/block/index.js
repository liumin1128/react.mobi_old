import React, { Fragment } from 'react';
import { strategy, hasBlock } from './utils';

const Button = ({
  value, onChange, type, icon,
}) => {
  // console.log(getMark(value).data.get('align') === type);
  const active = hasBlock(value, type);
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
    <Button value={value} onChange={onChange} type="heading-one" icon="looks_one" />
    <Button value={value} onChange={onChange} type="heading-two" icon="looks_two" />
    <Button value={value} onChange={onChange} type="heading-three" icon="looks_3" />
    <Button value={value} onChange={onChange} type="heading-four" icon="looks_4" />
    <Button value={value} onChange={onChange} type="heading-five" icon="looks_5" />
    <Button value={value} onChange={onChange} type="heading-six" icon="looks_6" />
    <Button value={value} onChange={onChange} type="block-quote" icon="format_quote" />
    <Button value={value} onChange={onChange} type="numbered-list" icon="format_list_numbered" />
    <Button value={value} onChange={onChange} type="bulleted-list" icon="format_list_bulleted" />
  </Fragment>
);

