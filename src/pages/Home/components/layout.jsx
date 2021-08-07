import React from "react";
import { FormControl, FormLabel, Select, Stack } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { cssBoxState } from "atoms/cssBox";

export default function Layout() {
  const [cssBox, setCssBox] = useRecoilState(cssBoxState);
  return (
    <>
      <FormControl id="display">
        <FormLabel>Display</FormLabel>
        <Select
          placeholder="Select option"
          value={cssBox["display"]}
          onChange={(e) => {
            setCssBox({ ...cssBox, display: e.target.value });
          }}
        >
          <option value="block">Block</option>
          <option value="inline">Inline</option>
          <option value="inline-block">Inline block</option>
          <option value="flex">Flex</option>
        </Select>
      </FormControl>
      {cssBox["display"] === "flex" ? (
        <>
          <FormControl id="justify-content">
            <Stack>
              <FormLabel>Justify Content</FormLabel>
              <Select
                placeholder="Select option"
                value={cssBox["justify-content"]}
                onChange={(e) => {
                  setCssBox({ ...cssBox, "justify-content": e.target.value });
                }}
              >
                <option value="flex-start">Flex start</option>
                <option value="flex-end">Flex end</option>
                <option value="center">Center</option>
                <option value="space-between">Space between</option>
                <option value="space-around">Space around</option>
                <option value="space-evenly">space-evenly</option>
                <option value="initial">initial</option>
                <option value="inherit">inherit</option>
              </Select>
            </Stack>
          </FormControl>
          <FormControl id="width">
            <Stack>
              <FormLabel>Align items</FormLabel>
              <Select
                placeholder="Select option"
                value={cssBox["align-items"]}
                onChange={(e) => {
                  setCssBox({ ...cssBox, "align-items": e.target.value });
                }}
              >
                <option value="flex-start">Flex start</option>
                <option value="flex-end">Flex end</option>
                <option value="center">Center</option>
                <option value="stretch">stretch</option>
                <option value="baseline">baseline</option>
                <option value="initial">initial</option>
                <option value="inherit">inherit</option>
              </Select>
            </Stack>
          </FormControl>
        </>
      ) : (
        ""
      )}
    </>
  );
}
