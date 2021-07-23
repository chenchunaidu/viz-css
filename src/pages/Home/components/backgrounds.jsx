import React from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { cssBoxState } from "atoms/cssBox";
export default function Backgrounds() {
  const [cssBox, setCssBox] = useRecoilState(cssBoxState);
  return (
    <FormControl>
      <FormLabel>Color</FormLabel>
      <Input
        value={cssBox["background"]}
        onChange={(e) => {
          setCssBox({ ...cssBox, background: e.target.value });
        }}
      />
    </FormControl>
  );
}
