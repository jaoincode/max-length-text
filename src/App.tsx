import { useState } from "react";
import "./App.css";

const maxLength = 100;

function App() {
  const [text, setText] = useState("");

  return (
    <div className="App">
      <textarea
        value={text}
        onChange={({ target }) => setText(target.value)}
        style={{ width: "300px", height: "100px", resize: "none" }}
      />
      <div style={{ width: "300px", height: "3px", background: "#333" }}>
        <div
          style={{
            width: `${text.length}%`,
            maxWidth: "100%",
            background:
              text.length >= 100
                ? "red"
                : text.length >= 75
                ? "yellow"
                : text.length >= 50
                ? "green"
                : "white",
            height: "100%",
            transition: " .5s",
          }}
        ></div>
      </div>
      <p
        style={{
          color:
            text.length >= 100 ? "red" : text.length >= 75 ? "yellow" : "white",
        }}
      >
        {text.length}/{maxLength}
      </p>
      <button disabled={text.length > 100}>Submit</button>
    </div>
  );
}

export default App;
