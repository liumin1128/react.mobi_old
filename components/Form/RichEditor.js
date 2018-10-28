import React, { PureComponent, createRef } from 'react';
import { getJSON, getHTML } from '@/components/DraftEditor/utils';
import CircularProgress from '@material-ui/core/CircularProgress';


export default class RichEditor extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      DynamicComponent: null,
    };
    this.editor = createRef();
  }

  componentDidMount() {
    // if your component use export default, use val.default,
    // else use val[yourComponentName]
    import('@/components/DraftEditor')
      .then(val => this.setState({ DynamicComponent: val.default }));
  }


  getJSON = () => {
    const { editorState } = this.editor.state;
    return getJSON(editorState);
  }

  getHTML = () => {
    const { editorState } = this.editor.state;
    return getHTML(editorState);
  }

  render() {
    const { DynamicComponent } = this.state;

    if (!DynamicComponent) {
      return (
        <div style={{ padding: 16, minHeight: 302 }}>
          <CircularProgress
            size={20}
            style={{ margin: 'auto', display: 'block' }}
          />
        </div>
      );
    }
    return (
      <DynamicComponent
        {...this.props}
        ref={(c) => { this.editor = c; }}
      />
    );
  }
}
