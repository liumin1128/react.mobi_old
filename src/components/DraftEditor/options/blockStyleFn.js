export default function (block) {
  switch (block.getType()) {
    case 'blockquote': return 'RichEditor-blockquote';
    case 'image': return 'RichEditor-image';
    default: return null;
  }
}
