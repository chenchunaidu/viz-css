import React from "react";
import { FormLabel, FormControl, Input, Stack } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { cssBoxState } from "atoms/cssBox";

export default function Size() {
  const [cssBox, setCssBox] = useRecoilState(cssBoxState);
  return (
    <>
      <Stack spacing="4">
        <Stack direction="row">
          <FormControl id="width">
            <Stack direction="row" alignItems="center">
              <FormLabel>Width</FormLabel>
              <Input name="width" 
                value={cssBox["width"]} 
                onChange={(e) => {
                    setCssBox({ ...cssBox, "width": e.target.value });
                  }}
              />
            </Stack>
          </FormControl>
          <FormControl id="height">
            <Stack direction="row" alignItems="center">
              <FormLabel>Height</FormLabel>
              <Input name="height" 
                  value={cssBox["height"]} 
                  onChange={(e) => {
                      setCssBox({ ...cssBox, "height": e.target.value });
                    }}

              />
            </Stack>
          </FormControl>
        </Stack>
        <Stack direction="row">
          <FormControl id="min-width">
            <Stack direction="row" alignItems="center">
              <FormLabel>MinW</FormLabel>
              <Input name="min-width" 
                value={cssBox["min-width"]} 
                onChange={(e) => {
                    setCssBox({ ...cssBox, "min-width": e.target.value });
                  }}
              />
            </Stack>
          </FormControl>
          <FormControl id="min-height">
            <Stack direction="row" alignItems="center">
              <FormLabel>MinH</FormLabel>
              <Input name="min-height" 
                  value={cssBox["min-height"]} 
                  onChange={(e) => {
                      setCssBox({ ...cssBox, "min-height": e.target.value });
                    }}

              />
            </Stack>
          </FormControl>
        </Stack>
        <Stack direction="row">
          <FormControl id="max-width">
            <Stack direction="row" alignItems="center">
              <FormLabel>MaxW</FormLabel>
              <Input name="max-width" 
                value={cssBox["max-width"]} 
                onChange={(e) => {
                    setCssBox({ ...cssBox, "max-width": e.target.value });
                  }}
              
              />
            </Stack>
          </FormControl>
          <FormControl id="max-height">
            <Stack direction="row" alignItems="center">
              <FormLabel>MaxH</FormLabel>
              <Input name="max-height" 
                  value={cssBox["max-height"]} 
                  onChange={(e) => {
                      setCssBox({ ...cssBox, "max-height": e.target.value });
                    }}
              />
            </Stack>
          </FormControl>
        </Stack>
      </Stack>
    </>
  );
}
