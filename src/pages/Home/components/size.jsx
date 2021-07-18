import React from "react";
import { FormLabel, FormControl, Input, Stack } from "@chakra-ui/react";
export default function Size() {
  return (
    <>
    <Stack spacing="4">
      <Stack  direction="row">
        <FormControl id="width">
          <Stack direction="row" alignItems="center">
            <FormLabel >Width</FormLabel>
            <Input name="width" />
          </Stack>
        </FormControl>
        <FormControl id="height">
          <Stack direction="row" alignItems="center">
            <FormLabel>Height</FormLabel>
            <Input name="height" />
          </Stack>
        </FormControl>
      </Stack>
      <Stack direction="row">
        <FormControl id="min-width">
          <Stack direction="row" alignItems="center">
            <FormLabel>MinW</FormLabel>
            <Input name="min-width" />
          </Stack>
        </FormControl>
        <FormControl id="min-height">
          <Stack direction="row" alignItems="center">
            <FormLabel>MinH</FormLabel>
            <Input name="min-height" />
          </Stack>
        </FormControl>
      </Stack>
      <Stack direction="row">
        <FormControl id="max-width">
          <Stack direction="row" alignItems="center">
            <FormLabel>MaxW</FormLabel>
            <Input name="max-width" />
          </Stack>
        </FormControl>
        <FormControl id="max-height">
          <Stack direction="row" alignItems="center">
            <FormLabel>MaxH</FormLabel>
            <Input name="max-height" />
          </Stack>
        </FormControl>
      </Stack>
      </Stack>
    </>
  );
}
