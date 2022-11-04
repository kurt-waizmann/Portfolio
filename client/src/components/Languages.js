// import packages
import styled from 'styled-components'
import { v4 as uuid } from 'uuid';

//import images
import css from "../assets/code-logos/css3.png"
import express from "../assets/code-logos/express.png"
import figma from "../assets/code-logos/figma.png"
import html from "../assets/code-logos/html5.png"
import javascript from "../assets/code-logos/javascript.png"
import mongodb from "../assets/code-logos/mongodb.png"
import node from "../assets/code-logos/nodejs.png"
import react from "../assets/code-logos/react.png"
import sass from "../assets/code-logos/sass.png"

const languages = [html, css, javascript, react, sass, node, express, figma, mongodb]


const Languages = () => {
    return (
        <Wrapper>
            {languages.map(pic => {
                return (
                <Box key={uuid()}>
                    <Image src={pic} alt="technologies" />
                    <Shadow/>
                </Box>
                )
            })}
    </Wrapper>
    )
}

export default Languages

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1.5rem;
    align-items: center;
    justify-content: center;
    margin: 5rem 0px;
    max-width: 35rem;
`
const Box = styled.div`
    width: 81.29px;
    height: 81.29px;
    border: 2px solid #FFFFFF;
    border-radius: 10px;
    align-items: center;
    display: flex;
    justify-content: center;
    position: relative;
    background-color: white;
`
const Shadow = styled.div`
    width: 81.29px;
    height: 81.29px;
    border: 2px solid #FFFFFF;
    border-radius: 10px;
    position: absolute;
    top: 5px;
    right: 5px;
`
const Image = styled.img`
    width: 5rem;
`