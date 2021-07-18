import React from 'react'
import { FormControl,FormLabel,Select } from '@chakra-ui/react'

export default function Layout() {
    return (
        <>
            <FormControl id="display">
                <FormLabel>Display</FormLabel>
                <Select placeholder="Select option">
                    <option value="block">Block</option>
                    <option value="inline">Inline</option>
                    <option value="inline-block">Inline block</option>
                    <option value="flex">Flex</option>
                </Select>
            </FormControl>
        </>
    )
}
