import React from "react";

function Editor(props) {
  return (
    <div id="editor-container">
      <div id="editor-header">
        <i id="editor-icon" className="fas fa-book"></i>
        <h3 id="editor-title">Editor</h3>
      </div>
      <textarea
        id="editor"
        value={props.text}
        onChange={props.changeHandler}
      ></textarea>
    </div>
  );
}

export default Editor;
