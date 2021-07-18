import React, { useState, useCallback } from "react";
import DOMPurify from "dompurify";
import CssBox from "./components/css-box";
import CodeEditor from "./components/code-editor";
import {   Flex, Stack } from "@chakra-ui/react";
import {initialValue} from './data/initial-value'
import {addStylesToElements} from 'utils/style-fns'

export default function Home() {
  let [html, setHtml] = useState(initialValue);
  let [selectedElement, setSelectedElement] = useState();
  const sanitizer = DOMPurify.sanitize;
  const handleOnClick = (e) => {
    // e.target.style.borderStyle="dashed"
    setSelectedElement(e);
  };
  const applyStyles = useCallback(
    (values) => {
      addStylesToElements(selectedElement,values)
    },
    [selectedElement]
  );
  const handleHtmlChange = (data) => {
    setHtml(data);
  };
  return (
    <>
      <Stack spacing="2" direction="row">
        <Flex flex="2">
          <CodeEditor onChange={handleHtmlChange} value={html} />
        </Flex>
        <Flex flex="2">
          <div
            dangerouslySetInnerHTML={{ __html: sanitizer(html) }}
            onClick={handleOnClick}
          />
        </Flex>
        <Flex flex="1">
          <CssBox applyStyles={applyStyles} />
        </Flex>
      </Stack>
    </>
  );
}
