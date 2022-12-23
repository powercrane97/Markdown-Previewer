import { useState } from "react";
import FullScreenButton from "./FullScreenButton";
import Buttons from "./Buttons";

function Editor({ input, onChange, onClick, toggled, onClear }) {
  // const [toggled, setToggled] = useState(true);
  const fullscreen = toggled ? "fullscreen" : "";
  return (
    <div className='editor-wrapper'>
      <div className='tab'>
        {/* <FullScreenButton className="fullscreen-btn"/> */}
        {/* <div id="test"></div> */}
        <span>Editor</span>
        <Buttons onClick={onClick} onClear={onClear} toggled={toggled} />
      </div>
      <textarea
        name='editor'
        id='editor'
        onChange={onChange}
        rows='10'
        value={input}
        className={fullscreen}
      ></textarea>
    </div>
  );
}

export default Editor;
