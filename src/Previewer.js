import React from "react";
import { Marked } from "marked";
import HTMLReactParser from "html-react-parser";
const marked = new Marked();

marked.use({
  breaks: true,
  gfm: true,
});

function Previewer(props) {
  const parsed = new HTMLReactParser(marked.parse(props.text));
  return (
    <div id="preview-container">
      <div id="preview-header">
        <i id="preview-icon" className="fas fa-book"></i>
        <h3 id="preview-title">Previewer</h3>
      </div>
      <div id="preview">{parsed}</div>
    </div>
  );
}

export default Previewer;
