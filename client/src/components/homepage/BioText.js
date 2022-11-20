// import packages
import styled from 'styled-components'


const BioText = () => {
    return (
        <div>
            <Details>
                <span>I'm fascinated with the possibilities of</span> 
                <Story> storytelling </Story> 
                <span>using </span>
                <Tech>web technologies</Tech> 
                <span>. Previously, I studied film production at the </span>
                <School>Mel Hoppenheim School of Cinema</School>
                <span> where I dabbled in eveything from sound design, screenwriting, and even directed my own projects. Now I hope to apply those lessons learned to my journey in web development.
                </span>
            </Details>
            <Details>
                <span>
                I have an education in full stack development — the </span>
                <Mern>MERN</Mern>
                <span> stack. But my preferences lean more towards </span>
                <Front>front-end development</Front>
                <span>. </span>
                <Parentheses>(But I honestly have fun with it all.)</Parentheses>
                <span> I work a lot in </span>
                <React>React.js </React>
                <span>and I have a special fondness for </span>
                <Css>CSS</Css>
                <span>. But I'm excited to continue my education and expand my coding knowledge even further, exploring more web technologies.</span>
            </Details>
        </div>
    )
}

export default BioText

const Details = styled.div`
  font-size: 1.7rem;
  font-weight: 200;
  line-height: 2.4rem;
  line-height: 34px;
  margin-top: 2rem;
  max-width: 42rem;
  text-align: justify;
  text-justify: inter-word;
`

const Story = styled.span`
    font-weight: 700;
`
const Tech = styled.span`
`
const School = styled.span`
    font-weight: 700;
`
const Mern = styled.span`
    font-weight: 700;
    font-family: 'PT Mono';
    letter-spacing: .3rem;

`
const Front = styled.span`
`
const Parentheses = styled.span`
    font-size: .8em;
    font-weight: 400;
`
const React = styled.span`
    font-weight: 700;
`
const Css = styled.span`
`

