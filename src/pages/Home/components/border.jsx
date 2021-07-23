import React from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

export default function Border() {
  return (
    <>
      <FormControl>
        <FormLabel>Border</FormLabel>
        <Input />
      </FormControl>
      <FormControl>
        <FormLabel>Border radius</FormLabel>
        <Input />
      </FormControl>
    </>
  );
}
