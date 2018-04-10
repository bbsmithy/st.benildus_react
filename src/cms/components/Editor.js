import { Editor, EditorState, RichUtils, SelectionState } from "draft-js";
import React from "react";

export default class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleState: EditorState.createEmpty(),
      paragraphIndex: 0,
      paragraphEditors: [`0_paragraph`],
      [`0_paragraph`]: EditorState.createEmpty()
    };
    this.onChangeTitle = state => this.setState({ titleState: state });
    this.onChangeParagraph = (editor, state) =>
      this.setState({ [editor]: state });
  }

  componentDidMount() {
    this.titleEditor.focus();
  }

  createParagraphEditor = () => {
    const pid = +this.state.paragraphIndex;
    const paragraphKey = `${pid}_paragraph`;
    const paragraphs = this.state.paragraphEditors.concat(paragraphKey);
    const newState = {
      paragraphIndex: pid,
      [paragraphKey]: EditorState.createEmpty(),
      paragraphEditors: paragraphs
    };
    this.setState(newState);
  };

  render() {
    return (
      <div className={"shadow"}>
        <div
          style={{
            padding: 10,
            backgroundColor: "#f8f8f8",
            fontSize: 18,
            margin: 10,
            marginTop: 0
          }}
        >
          <Editor
            editorState={this.state.titleState}
            onChange={this.onChangeTitle}
            ref={titleEditor => {
              this.titleEditor = titleEditor;
            }}
            placeholder={"Title"}
          />
        </div>
        {this.state.paragraphEditors.map(editor => {
          return (
            <div
              style={{
                margin: 10,
                marginTop: 0,
                padding: 10,
                backgroundColor: "#f8f8f8"
              }}
            >
              <Editor
                editorState={this.state[editor]}
                onChange={state => {
                  this.onChangeParagraph(editor, state);
                }}
              />
            </div>
          );
        })}
        <div className={"row"}>
          <div className={"col-md-12"}>
            <button
              onClick={this.createParagraphEditor}
              className={"btn btn-primary pull-right"}
              style={{ marginRight: 5, marginBottom: 10 }}
            >
              Save
            </button>
            <button
              onClick={this.createParagraphEditor}
              className={"btn btn-primary pull-right"}
              style={{ margiLeft: 5, marginBottom: 10, marginRight: 10 }}
            >
              Add paragraph
            </button>
          </div>
        </div>
      </div>
    );
  }
}
