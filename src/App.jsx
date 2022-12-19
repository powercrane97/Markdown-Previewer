import { useState } from "react";
import "./App.css";
import Editor from "./Editor";
import Preview from "./Preview";
import initialState from "./intialState";

function App() {
  const [input, setInput] = useState(initialState);
  const [fullEditor, setFullEditor] = useState(false);
  const [fullPreview, setFullPreview] = useState(false);

  function handleInput(e) {
    setInput(input => e.target.value);
  }

  function handleEditor() {
    setFullEditor(state => !state);
  }

  function handlePreview() {
    setFullPreview(state => !state);
  }

  return (
    <div className='App'>
      {fullPreview || (
        <Editor
          input={input}
          onChange={handleInput}
          onClick={handleEditor}
          toggled={fullEditor}
        />
      )}
      {fullEditor || (
        <Preview
          content={input}
          onClick={handlePreview}
          toggled={fullPreview}
        />
      )}
    </div>
  );
}

export default App;
