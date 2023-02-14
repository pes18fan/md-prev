import { useState } from "react";

import { marked } from "marked";
import DOMPurify from "isomorphic-dompurify";

import "../styles/App.css";
import Footer from "./Footer";

function App() {
  const [markdown, setMarkdown] = useState("# Hello world\n\nThis is _Markdown_.");
  const handleChange = (e: any) => setMarkdown(e.target.value);

  const parsedMarkdown = {
    __html: DOMPurify.sanitize(marked.parse(markdown)),
  };

  return (
    <div className="App">
      <h1 className="heading">markdown previewer</h1>

      <div className="container">
        <div className="left-panel">
          <textarea
            className="source"
            value={markdown}
            onChange={handleChange}
          ></textarea>
        </div>

        <div
          className="right-panel"
        >
          <div className="parsed"
          dangerouslySetInnerHTML={parsedMarkdown}></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
