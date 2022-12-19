import { useState } from "react";
import FullScreenButton from "./FullScreenButton";
import Buttons from "./Buttons";

export default function Editor({ input, onChange, onClick, toggled }) {
  // const [toggled, setToggled] = useState(true);
  const fullscreen = toggled ? "fullscreen" : "";
  return (
    <div className='editor-wrapper'>
      <div className='tab'>
        {/* <FullScreenButton className="fullscreen-btn"/> */}
        {/* <div id="test"></div> */}
        <span>Editor</span>
        <Buttons onClick={onClick} />
      </div>
      <textarea
        name='editor'
        id='editor'
        onChange={onChange}
        rows='10'
        defaultValue={input}
        className={fullscreen}
      ></textarea>
    </div>
  );
}
