import React, { Component } from 'react';
import { Entity, RichUtils, EditorState, Modifier } from 'draft-js';
import LinkIcon from '@material-ui/icons/Link';
import LinkOffIcon from '@material-ui/icons/LinkOff';
import Form from '../../form';
import StyleButton from './StyleButton';

const formKeys = [
  {
    key: 'text',
    label: '显示的文本',
  }, {
    key: 'href',
    label: '连接url地址',
    placeholder: 'https:// or http://',
  },
];

export default class MediaButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      confirmLoading: false,
    };
  }

  onSubmit = ({ text, href }) => {
    this.createLink(text, href);

    // 清空表单
    this.formRef.props.form.resetFields();

    // 关闭模态窗
    this.setState({ visible: false });
  }

  createLink = (text, href) => {
    const { editorState, onChange } = this.props;

    // 获取entityKey
    const contentState = editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity('LINK', 'MUTABLE', { href });
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();

    // 插入行内文本
    const newEditorState = Modifier.insertText(
      editorState.getCurrentContent(),
      editorState.getSelection(),
      text,
      editorState.getCurrentInlineStyle(),
      entityKey,
    );

    // 更新数据
    onChange(EditorState.push(
      editorState,
      newEditorState,
      'insert-characters',
    ));
  }

  toggleLink = () => {
    const url = prompt('请输入url:', 'https://');
    if (!url) return;
    // const url = 'https://react.mobi';
    const { editorState, onChange } = this.props;
    const entityKey = Entity.create('LINK', 'MUTABLE', { url });
    onChange(RichUtils.toggleLink(
      editorState,
      editorState.getSelection(),
      entityKey,
    ));
  }


  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = () => {
    this.setState({
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  }

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  }

  promptForLink() {
    const { editorState } = this.props;
    const selection = editorState.getSelection();
    if (!selection.isCollapsed()) {
      this.toggleLink();
    } else {
      // console.log(RichUtils);
      this.showModal();
    }
  }

  removeLink() {
    const { editorState, onChange } = this.props;
    const selection = editorState.getSelection();
    if (!selection.isCollapsed()) {
      onChange(RichUtils.toggleLink(editorState, selection, null));
    }
  }

  render() {
    const { visible, confirmLoading } = this.state;
    // const { editorState } = this.props;

    // console.log('editorState');
    // console.log(editorState.getSelection());

    return (
      <>
        <StyleButton
          key="link"
          icon={LinkIcon}
          // active={currentStyle.has(type.style)}
          label="link"
          onToggle={() => {
            this.promptForLink();
          }}
          // style={type.style}
        />
        <StyleButton
          key="link-off"
          icon={LinkOffIcon}
          // active={currentStyle.has(type.style)}
          label="link-off"
          onToggle={() => {
            this.removeLink();
          }}
          // style={type.style}
        />
        <Modal
          title="插入连接"
          visible={visible}
          onOk={() => {
            this.formRef.handleSubmit();
          }}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          <Form
            // data={formData}
            keys={formKeys}
            wrappedComponentRef={(c) => { this.formRef = c; }}
            onSubmit={this.onSubmit}
          />
        </Modal>
      </>
    );
  }
}
