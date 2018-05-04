import React, { PureComponent, createRef } from 'react';
import { Editor, EditorState, RichUtils, getDefaultKeyBinding, DefaultDraftBlockRenderMap, AtomicBlockUtils, Modifier, convertToRaw, Entity, CompositeDecorator } from 'draft-js';
import Immutable from 'immutable';
import Head from 'next/head';
// import draftToHtml from 'draftjs-to-html';
import { stateToHTML } from 'draft-js-export-html';
import BlockStyleControls from './BlockStyleControls';
import InlineStyleControls from './InlineStyleControls';
import ColorControls from './ColorControls';
import MyCustomBlock from './MyCustomBlock';
import MediaComponent from './Media';
import Link from './decorator/link/component';
import findLinkEntities from './decorator/link/strategy';

// import './index.css';

const colorStyleMap = {
  red: {
    color: 'rgba(255, 0, 0, 1.0)',
  },
  orange: {
    color: 'rgba(255, 127, 0, 1.0)',
  },
  yellow: {
    color: 'rgba(180, 180, 0, 1.0)',
  },
  green: {
    color: 'rgba(0, 180, 0, 1.0)',
  },
  blue: {
    color: 'rgba(0, 0, 255, 1.0)',
  },
  indigo: {
    color: 'rgba(75, 0, 130, 1.0)',
  },
  violet: {
    color: 'rgba(127, 0, 255, 1.0)',
  },
};

export default class MyEditor extends PureComponent {
  state = {
    editorState: EditorState.createEmpty(new CompositeDecorator([
      {
        strategy: findLinkEntities,
        component: Link,
      },
    ])),
  }

  onChange = editorState => this.setState({ editorState });

  getHtml = () => {
    const { editorState } = this.state;
    const html = stateToHTML(editorState.getCurrentContent());
    console.log('html');
    console.log(html);
  }

  getJson = () => {
    const { editorState } = this.state;
    const raw = convertToRaw(editorState.getCurrentContent());
    return raw;
  }

  editor = createRef()

  focus = () => this.editor.focus();

  handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }

  toggleBlockType = (blockType) => {
    this.onChange(RichUtils.toggleBlockType(
      this.state.editorState,
      blockType,
    ));
  }

  toggleInlineStyle = (inlineStyle) => {
    this.onChange(RichUtils.toggleInlineStyle(
      this.state.editorState,
      inlineStyle,
    ));
  }

  toggleColor = (toggledColor) => {
    const { editorState } = this.state;
    const selection = editorState.getSelection();

    // Let's just allow one color at a time. Turn off all active colors.
    const nextContentState = Object.keys(colorStyleMap)
      .reduce((contentState, color) => {
        return Modifier.removeInlineStyle(contentState, selection, color);
      }, editorState.getCurrentContent());

    let nextEditorState = EditorState.push(
      editorState,
      nextContentState,
      'change-inline-style',
    );

    const currentStyle = editorState.getCurrentInlineStyle();

    // Unset style override for current color.
    if (selection.isCollapsed()) {
      nextEditorState = currentStyle.reduce((state, color) => {
        return RichUtils.toggleInlineStyle(state, color);
      }, nextEditorState);
    }

    // If the color is being toggled on, apply it.
    if (!currentStyle.has(toggledColor)) {
      nextEditorState = RichUtils.toggleInlineStyle(
        nextEditorState,
        toggledColor,
      );
    }

    this.onChange(nextEditorState);
  }

  blockStyleFn = (block) => {
    switch (block.getType()) {
      case 'blockquote': return 'RichEditor-blockquote';
      // case 'code-block': return 'RichEditor-blockquote';
      default: return null;
    }
  }

  blockRenderer = (block) => {
    switch (block.getType()) {
      case 'atomic': return {
        component: MediaComponent,
        editable: false,
        props: {
          foo: 'bar',
        },
      };
      case 'MyCustomBlock': return {
        component: MyCustomBlock,
        editable: false,
        props: {
          foo: 'bar',
        },
      };
      default: return null;
    }
  }

  blockRenderMap = DefaultDraftBlockRenderMap.merge(Immutable.Map({
    // unstyled: {
    //   element: 'div',
    //   aliasedElements: ['p'],
    // },
    MyCustomBlock: {
      element: 'section',
      // wrapper: MyCustomBlock,
    },
  }))

  mapKeyToEditorCommand = (e) => {
    if (e.keyCode === 9 /* TAB */) {
      const newEditorState = RichUtils.onTab(
        e,
        this.state.editorState,
        4, /* maxDepth */
      );
      if (newEditorState !== this.state.editorState) {
        this.onChange(newEditorState);
      }
      return;
    }
    return getDefaultKeyBinding(e);
  }

  createEntity = (...options) => {
    const { editorState } = this.state;
    const contentState = editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity(...options);
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const newEditorState = EditorState.set(
      editorState,
      { currentContent: contentStateWithEntity },
    );

    this.setState({
      editorState: AtomicBlockUtils.insertAtomicBlock(
        newEditorState,
        entityKey,
        ' ',
      ),
    }, () => {
      setTimeout(() => this.focus(), 0);
    });
  }

  createLink = () => {
    const url = 'https://react.mobi';
    const { editorState } = this.state;
    const entityKey = Entity.create('LINK', 'MUTABLE', { url });
    this.setState({
      editorState: RichUtils.toggleLink(
        editorState,
        editorState.getSelection(),
        entityKey,
      ),
    }, () => {
      setTimeout(() => this.focus(), 0);
    });
  }

  removeLink() {
    const { editorState } = this.state;
    const selection = editorState.getSelection();
    if (!selection.isCollapsed()) {
      this.setState({
        editorState: RichUtils.toggleLink(editorState, selection, null),
      });
    }
  }

  promptForLink() {
    const { editorState } = this.state;
    const selection = editorState.getSelection();
    if (!selection.isCollapsed()) {
      this.createLink();
    }
  }

  addMedia = ({ type, value }) => {
    this.createEntity(type, 'IMMUTABLE', { src: value });
  }

  render() {
    const { editorState } = this.state;
    let className = 'RichEditor-editor';
    const contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
      if (contentState.getBlockMap().first().getType() !== 'unstyled') {
        className += ' RichEditor-hidePlaceholder';
      }
    }

    return (
      <div className="RichEditor-root">
        <Head>
          <link href="/static/draft-editor.css" rel="stylesheet" />
        </Head>
        <button onClick={this.getHtml}>gethtml</button>
        <button
          onClick={() => this.addMedia({
            value: 'https://cdn.huaren58.com/FlKXUCac9xlIlMSS-EEkgmx_05HS?imageMogr2/thumbnail/!320x180r/gravity/Center/crop/320x180',
            type: 'image',
          })}
        >插入图片</button>

        <button
          onClick={() => {
            this.createEntity('test', 'IMMUTABLE');
          }}
        >插入块</button>

        <button
          onClick={() => {
            this.promptForLink();
          }}
        >link</button>

        <button
          onClick={() => {
            this.removeLink();
          }}
        >un link</button>

        <BlockStyleControls
          editorState={editorState}
          onToggle={this.toggleBlockType}
        />
        <InlineStyleControls
          editorState={editorState}
          onToggle={this.toggleInlineStyle}
        />
        <ColorControls
          editorState={editorState}
          onToggle={this.toggleColor}
        />
        <div
          className={className}
          // onClick={this.focus}
        >
          <Editor
            // textAlignment={'right'}
            blockStyleFn={this.blockStyleFn}
            blockRenderMap={this.blockRenderMap}
            blockRendererFn={this.blockRenderer}
            customStyleMap={{
              'Code Block': {
                backgroundColor: 'red',
                fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
                fontSize: 16,
                padding: 2,
              },
              link: {
                color: '#3b5998',
                textDecoration: 'underline',
              },
              ...colorStyleMap,
            }}
            editorState={editorState}
            handleKeyCommand={this.handleKeyCommand}
            keyBindingFn={this.mapKeyToEditorCommand}
            onChange={this.onChange}
            placeholder="Tell a story..."
            ref={(c) => { this.editor = c; }}
            spellCheck
          />
        </div>

        <pre>
          {JSON.stringify(this.getJson(), null, 2)}
        </pre>
      </div>
    );
  }
}
