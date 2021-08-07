import React, { useState, useCallback } from "react";
import DOMPurify from "dompurify";
import CssBox from "./components/css-box";
import CodeEditor from "./components/code-editor";
import { Flex, Stack } from "@chakra-ui/react";
import { initialValue } from "./data/initial-value";
import { addStylesToElements } from "utils/style-fns";
import { useRecoilState } from "recoil";
import { cssBoxState } from "atoms/cssBox";

export default function Home() {
  let [html, setHtml] = useState(initialValue);
  let [selectedElement, setSelectedElement] = useState();
  const sanitizer = DOMPurify.sanitize;
  const [cssBoxData] = useRecoilState(cssBoxState);
  const handleOnClick = useCallback(
    (e) => {
      if (selectedElement) {
        selectedElement.target.style.border = "None";
      }
      e.target.style.border = "3px dashed black";
      setSelectedElement(e);
    },
    [selectedElement]
  );
  const applyStyles = useCallback(() => {
    console.log(cssBoxData);
    addStylesToElements(selectedElement, cssBoxData);
  }, [selectedElement, cssBoxData]);
  const handleHtmlChange = (data) => {
    setHtml(data);
  };
  return (
    <>
      <Stack spacing="2" direction="row">
        <Flex flex="2" flexGrow="1">
          <CodeEditor onChange={handleHtmlChange} value={html} />
        </Flex>
        <Flex flex="2" flexGrow="1">
          <div
            dangerouslySetInnerHTML={{ __html: sanitizer(html) }}
            onClick={handleOnClick}
          />
        </Flex>
        <Flex flex="1" flexGrow="1">
          <CssBox applyStyles={applyStyles} />
        </Flex>
      </Stack>
    </>
  );
}
