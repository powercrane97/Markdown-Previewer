import { marked } from "marked";
import { useState, useEffect } from "react";
import Buttons from "./Buttons";
import FullScreenButton from "./FullScreenButton";
import hljs from "highlight.js";
import "highlight.js/styles/googlecode.css";

hljs.configure({
  cssSelector: "code",
  languages: ["javascript", "css", "html"],
});

marked.setOptions({
  gfm: true,
  breaks: true,
  headerIds: false,
  //   langPrefix: "hljs language-",
  highlight: code => hljs.highlightAll(),
});

function Preview({ content, onClick, toggled }) {
  //   const fullscreen = toggled ? " fullscreen" : "";
  const markedContent = marked(content);

  return (
    <div className='preview-wrapper'>
      <div className='tab'>
        <span>Preview</span>
        <Buttons onClick={onClick} />
      </div>
      <div className='preview-content'>
        <div id='preview' dangerouslySetInnerHTML={{ __html: markedContent }} />
      </div>
    </div>
  );
}

export default Preview;
