import React, { PureComponent, createRef } from 'react';
import { state2json, state2html } from '@/components/DraftEditor/utils';
import Skeleton from '@/components/DraftEditor/Skeleton';

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
      .then((val) => this.setState({ DynamicComponent: val.default }));
  }


  getJSON = () => {
    if (!this.editor || !this.editor.current) return;
    const { editorState } = this.editor.current.state;
    return state2json(editorState);
  }

  getHTML = () => {
    if (!this.editor || !this.editor.current) return;
    const { editorState } = this.editor.current.state;
    return state2html(editorState);
  }

  render() {
    const { DynamicComponent } = this.state;

    if (!DynamicComponent) {
      return <Skeleton />;
    }

    return (
      <DynamicComponent
        {...this.props}
        ref={this.editor}
      />
    );
  }
}
