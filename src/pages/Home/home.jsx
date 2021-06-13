import React, { useState, useCallback } from "react";
import { Grid, Col } from "@mantine/core";
import DOMPurify from "dompurify";
import CssBox from "./components/css-box";
import CodeEditor from "./components/code-editor";

export default function Home() {
  let [html, setHtml] = useState();
  let [selectedElement, setSelectedElement] = useState();
  const sanitizer = DOMPurify.sanitize;
  const handleOnClick = (e) => {
    setSelectedElement(e);
  };
  const applyStyles = useCallback(
    (values) => {
      const { color, background } = values;
      if (color) {
        selectedElement.target.style.color = color;
      }
      if (background) {
        selectedElement.target.style.background = background;
      }
    },
    [selectedElement]
  );
  const handleHtmlChange = (data) => {
    setHtml(data);
  };
  return (
    <>
      <Grid style={{ height: "100%" }}>
        <Col span={4} style={{ height: "100%" }}>
          <CodeEditor onChange={handleHtmlChange} value={html} />
        </Col>
        <Col span={4}>
          <div
            dangerouslySetInnerHTML={{ __html: sanitizer(html) }}
            onClick={handleOnClick}
          />
        </Col>
        <Col span={4}>
          <CssBox applyStyles={applyStyles} />
        </Col>
      </Grid>
    </>
  );
}
