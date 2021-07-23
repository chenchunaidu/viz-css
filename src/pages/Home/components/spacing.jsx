import React from 'react'
import {FormControl, FormLabel, Stack,Input} from "@chakra-ui/react"

export default function Spacing() {
    return (
        <Stack>
                <FormControl>
                    <FormLabel>
                        Margin
                    </FormLabel>
                    <Stack>
                        <Input placeholder="All"/>
                        <Stack direction="row">
                            <Input placeholder="Left"/>
                            <Input placeholder="Right"/>
                        </Stack>
                        <Stack direction="row">
                            <Input placeholder="Top"/>
                            <Input placeholder="Bottom"/>
                        </Stack>
                    </Stack>
                </FormControl>
                <FormControl>
                    <FormLabel>
                        Padding
                    </FormLabel>
                    <Stack>
                        <Input placeholder="All"/>
                        <Stack direction="row">
                            <Input placeholder="Left"/>
                            <Input placeholder="Right"/>
                        </Stack>
                        <Stack direction="row">
                            <Input placeholder="Top"/>
                            <Input placeholder="Bottom"/>
                        </Stack>
                    </Stack>
                </FormControl>
        </Stack>
    )
}
