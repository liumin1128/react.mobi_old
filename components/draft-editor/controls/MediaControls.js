import React, { Fragment, Component } from 'react';
import { EditorState, AtomicBlockUtils } from 'draft-js';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PhotoIcon from '@material-ui/icons/Photo';
import UploadImages from '../../upload/images';

const styles = theme => ({
  button: {
    minHeight: 'auto',
    minWidth: 'auto',
    padding: 8,
  },
  unactive: {
    color: '#ccc',
  },
  icon: {
    fontSize: 20,
  },
});

@withStyles(styles)
export default class MediaButton extends Component {
  createEntity = (...options) => {
    const { editorState, onChange } = this.props;
    const contentState = editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity(...options);
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const newEditorState = EditorState.set(
      editorState,
      { currentContent: contentStateWithEntity },
    );
    onChange(AtomicBlockUtils.insertAtomicBlock(
      newEditorState,
      entityKey,
      ' ',
    ));
  }
  addMedia = ({ type, value }) => {
    this.createEntity(type, 'IMMUTABLE', { src: value });
  }
  render() {
    const { editorState, onChange, classes } = this.props;
    return (

      <Button
        // color={active ? 'primary' : 'default'}
        // aria-label={label}
          // onClick={() => this.addMedia({
          //   value: 'https://cdn.huaren58.com/FlKXUCac9xlIlMSS-EEkgmx_05HS?imageMogr2/thumbnail/!320x180r/gravity/Center/crop/320x180',
          //   type: 'image',
          // })}
        className={classes.button}
      >
        <UploadImages onComplete={value => this.addMedia({ type: 'image', value })}>
          <PhotoIcon className={`${classes.icon} ${classes.unactive}`} />
        </UploadImages>
      </Button>

    );
  }
}

