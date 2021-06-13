import React,{useState,useCallback} from 'react'
import DOMPurify from 'dompurify';
import CssBox from './components/css-box'
import CodeEditor from './components/code-editor'
import { Flex,Box } from '@chakra-ui/react';

export default function Home() {
    let [html,setHtml] = useState()
    let [selectedElement,setSelectedElement] = useState()
    const sanitizer = DOMPurify.sanitize;
    const handleOnClick = (e)=>{
        setSelectedElement(e)
    }
    const applyStyles = useCallback(
        (values) => {
            const {color,background} = values
            if(color){
                selectedElement.target.style.color = color
            }
            if(background){
                selectedElement.target.style.background = background
            }
        },
        [selectedElement],
    )
    const handleHtmlChange = (data)=>{
        setHtml(data)   
    }
    return (

        <>
            <Flex>
                <Box flex="1">
                    <CodeEditor onChange={handleHtmlChange} value={html}/>
                </Box>
                <Box flex="1">
                    <div dangerouslySetInnerHTML={{__html: sanitizer(html)}} onClick={handleOnClick} />
                </Box>
                <Box flex="1">
                    <CssBox applyStyles={applyStyles}/>
                </Box>
            </Flex>
            
            
            
        </>
    )
}
