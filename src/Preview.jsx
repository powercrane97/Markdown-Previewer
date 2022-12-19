import { marked } from "marked";
import { useState, useEffect } from "react";
import Buttons from "./Buttons";
import FullScreenButton from "./FullScreenButton";

export default function Preview({ content, onClick, toggled }) {
  const fullscreen = toggled ? "fullscreen" : "";
  const markedContent = marked(content, {
    gfm: true,
    breaks: true,
    headerIds: false,
  });

  // useEffect(() => {
  // 	return console.log(markedContent);
  // })

  console.log(markedContent);
  return (
    <div className='preview-wrapper'>
      <div className='tab'>
        <span>Preview</span>
        <Buttons onClick={onClick} />
      </div>
      <div className={"preview-content" + fullscreen}>
        <div id='preview' dangerouslySetInnerHTML={{ __html: markedContent }} />
      </div>
    </div>
  );
}
