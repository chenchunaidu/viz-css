import React from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { cssBoxState } from "atoms/cssBox";

export default function Effect() {
  const [cssBox, setCssBox] = useRecoilState(cssBoxState);
  return (
    <FormControl>
      <FormLabel>Box shadow</FormLabel>
      <Input
        value={cssBox["box-shadow"]}
        onChange={(e) => {
          setCssBox({ ...cssBox, "box-shadow": e.target.value });
        }}
      />
    </FormControl>
  );
}
