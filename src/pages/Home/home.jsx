import React,{useState,useCallback} from 'react'
import { Grid, Col,Textarea } from '@mantine/core';
import DOMPurify from 'dompurify';
import CssBox from './components/css-box'

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
    const handleHtmlChange = (e)=>{
        setHtml(e.target.value)   
    }
    return (

        <>
            <Grid style={{height:"100%"}}>
                <Col span={4} style={{height:"100%"}}>
                <Textarea
                    style={{height:"100%"}}
                    placeholder="Enter your html here"
                    label="HTML"
                    onChange={handleHtmlChange} value={html}
                   
                    />    
                </Col>
                <Col span={4}>
                    <div dangerouslySetInnerHTML={{__html: sanitizer(html)}} onClick={handleOnClick} />
                </Col>
                <Col span={4}>                
                <CssBox applyStyles={applyStyles}/>
                </Col>
                
                
            </Grid>
            
            
            
        </>
    )
}
