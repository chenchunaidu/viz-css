import React, { useRef } from "react";
import Editor from "@monaco-editor/react";
// import ReactResizeDetector from 'react-resize-detector';

export default function CodeEditor({
  onChange,
  theme = "vs-dark",
  height = "100vh",
  defaultLanguage = "html",
  value,
}) {
  const editorRef = useRef(null);
  function handleEditorDidMount(editor) {
    editorRef.current = editor;
    console.log(editor);
  }

  const defaultValue = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
  </head>
  <body>
      <div class="card">
      <img src="https://m.media-amazon.com/images/M/MV5BNTdmZjI2YzQtNWMzZS00MDQ1LTkzZDYtMWZlNzhmZTM4MjVkXkEyXkFqcGdeQXVyODEzNjM5OTQ@._V1_FMjpg_UX935_.jpg" alt="Avatar" style="width:100%">
      <div class="container">
          <h4><b>Naruto Uzumati</b></h4>
          <p>Ninja</p>
      </div>
      </div>
  </body>
  </html>`;

  return (
    <Editor
      height={height}
      defaultLanguage={defaultLanguage}
      defaultValue={defaultValue}
      theme={theme}
      onChange={onChange}
      value={value}
      automaticLayout={true}
      onMount={handleEditorDidMount}
    />
  );
}
