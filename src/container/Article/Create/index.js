import React from 'react';
import Container from './container';

const json = '{"blocks":[{"key":"fnng1","text":"2121","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"798as","text":" ","type":"atomic","depth":0,"inlineStyleRanges":[],"entityRanges":[{"offset":0,"length":1,"key":0}],"data":{}},{"key":"49cc7","text":"212121","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{"0":{"type":"image","mutability":"IMMUTABLE","data":{"src":"https://imgs.react.mobi/FlWDA30s6yWJNLdf3t1PFQDLRueF"}}}}';

const initialValues = {
  title: '信息',
  description: 'descriptiondescriptiondescriptiondescriptiondescription',
  type: '开发者',
  cover: 'https://imgs.react.mobi/FlWDA30s6yWJNLdf3t1PFQDLRueF',
  tags: [ '11', '22' ],
  json,
};

export default function () {
  function onSubmit(values) {
    console.log(values);
  }
  return (
    <Container
      values={initialValues}
      onSubmit={onSubmit}
    />
  );
}
