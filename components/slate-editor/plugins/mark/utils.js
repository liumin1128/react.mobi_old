export const hasMark = (value, type) => value.activeMarks.some(mark => mark.type === type);

export const strategy = (change, type) => {
  console.log(type);
  return change.toggleMark(type).focus();
};
