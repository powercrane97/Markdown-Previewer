import Buttons from "./Buttons";

function Editor({ input, onChange, onClick, toggled, onClear }) {
  const fullscreen = toggled ? "fullscreen" : "";
  return (
    <div className='editor-wrapper'>
      <div className='tab'>
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
