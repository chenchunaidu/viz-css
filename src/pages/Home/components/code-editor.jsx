import React from "react";
import Editor from "@monaco-editor/react";

export default function CodeEditor({
  onChange,
  theme = "vs-dark",
  height = "100vh",
  defaultLanguage = "html",
  value,
}) {
  const defaultValue = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        
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
    />
  );
}
