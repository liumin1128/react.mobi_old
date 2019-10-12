export default (values) => {
  const errors = {};
  if (!values.title) {
    errors.title = '标题不可以不填';
  }
  // if (!values.cover) {
  //   errors.cover = '封面不可以不填';
  // }
  if (!values.description) {
    errors.description = '描述不可以不填';
  }
  // if (!values.tags) {
  //   errors.tags = '标签不可以不填';
  // }
  return errors;
};
