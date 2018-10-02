import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PhotoIcon from '@material-ui/icons/Photo';
import UploadImages from '../../upload/wrapper';
import { insertAtomicBlock } from '../utils';

const styles = theme => ({
  button: {
    minHeight: 'auto',
    minWidth: 'auto',
    padding: 0,
    width: 36,
    height: 36,
  },
  unactive: {
    color: '#ccc',
  },
  icon: {
    fontSize: 20,
    marginBottom: -4,
    padding: 8,
    width: 36,
    height: 36,
  },
});

@withStyles(styles)
export default class MediaButton extends Component {
  addMedia = ({ type, value }) => {
    const { editorState, onChange } = this.props;
    onChange(insertAtomicBlock(
      editorState,
      type,
      'IMMUTABLE',
      {
        src: value,
      },
    ));
  }

  render() {
    const { classes } = this.props;
    return (
      <UploadImages onChange={(values) => {
        values.map((value) => {
          this.addMedia({ type: 'image', value });
        });
      }}
      >
        <Button className={classes.button}>
          <PhotoIcon className={`${classes.icon} ${classes.unactive}`} />
        </Button>
      </UploadImages>

    );
  }
}
