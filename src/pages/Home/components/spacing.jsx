import React from "react";
import { FormControl, FormLabel, Stack, Input } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { cssBoxState } from "atoms/cssBox";

export default function Spacing() {
  const [cssBox, setCssBox] = useRecoilState(cssBoxState);
  return (
    <Stack>
      <FormControl>
        <FormLabel>Margin</FormLabel>
        <Stack>
          <Input placeholder="All" 
             value={cssBox["margin"]} 
             onChange={(e) => {
                 setCssBox({ ...cssBox, "margin": e.target.value });
               }}
          
          />
          <Stack direction="row">
            <Input placeholder="Left" 
                value={cssBox["margin-left"]} 
                onChange={(e) => {
                    setCssBox({ ...cssBox, "margin-left": e.target.value });
                  }}
            />
            <Input placeholder="Right" 
                value={cssBox["margin-right"]} 
                onChange={(e) => {
                    setCssBox({ ...cssBox, "margin-right": e.target.value });
                  }}
            />
          </Stack>
          <Stack direction="row">
            <Input placeholder="Top" 
              value={cssBox["margin-top"]} 
              onChange={(e) => {
                  setCssBox({ ...cssBox, "margin-top": e.target.value });
                }}
            />
            <Input placeholder="Bottom" 
              value={cssBox["margin-bottom"]} 
              onChange={(e) => {
                  setCssBox({ ...cssBox, "margin-bottom": e.target.value });
                }}
            />
          </Stack>
        </Stack>
      </FormControl>
      <FormControl>
        <FormLabel>Padding</FormLabel>
        <Stack>
          <Input placeholder="All" 
           value={cssBox["padding"]} 
           onChange={(e) => {
               setCssBox({ ...cssBox, "padding": e.target.value });
             }}
          />
          <Stack direction="row">
            <Input placeholder="Left" 
            value={cssBox["padding-left"]} 
            onChange={(e) => {
                setCssBox({ ...cssBox, "padding-left": e.target.value });
              }}
            />
            <Input 
              placeholder="Right" 
              value={cssBox["padding-right"]} 
              onChange={(e) => {
                setCssBox({ ...cssBox, "padding-right": e.target.value });
              }}
              />
          </Stack>
          <Stack direction="row">
            <Input placeholder="Top"
              value={cssBox["padding-top"]} 
              onChange={(e) => {
                setCssBox({ ...cssBox, "padding-top": e.target.value });
              }}
            />
            <Input placeholder="Bottom" 
              value={cssBox["padding-bottom"]} 
              onChange={(e) => {
                setCssBox({ ...cssBox, "padding-bottom": e.target.value });
              }}
            />
          </Stack>
        </Stack>
      </FormControl>
    </Stack>
  );
}
