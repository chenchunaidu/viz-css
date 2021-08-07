import React from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { cssBoxState } from "atoms/cssBox";

export default function Border() {
  const [cssBox, setCssBox] = useRecoilState(cssBoxState);
  return (
    <>
      <FormControl>
        <FormLabel>Border</FormLabel>
        <Input 
          value={cssBox["border"]} 
          onChange={(e) => {
              setCssBox({ ...cssBox, "border": e.target.value });
            }}
            />
      </FormControl>
      <FormControl>
        <FormLabel>Border radius</FormLabel>
        <Input 
        value={cssBox["border-radius"]} 
        onChange={(e) => {
            setCssBox({ ...cssBox, "border-radius": e.target.value });
          }}
        />
      </FormControl>
    </>
  );
}
