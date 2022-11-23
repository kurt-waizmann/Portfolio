// import packages
import styled from 'styled-components'


const BioText = () => {
    return (
        <Wrapper>
            <Details>
                I'm fascinated with the possibilities of storytelling using web technologies. Previously, I studied film production at the Mel Hoppenheim School of Cinema where I dabbled in eveything from sound design, screenwriting, and even directed my own projects. Now I hope to apply those lessons to my journey in web development.
            </Details>
            <Details style={{ marginTop: "2rem" }} >
                I have an education in full stack development — the
                <Mern> MERN </Mern>
                stack. But my preferences lean more towards front-end development. I work a lot in React.js and I have a special fondness for CSS.
            </Details>
            <Details style={{ marginTop: "2rem" }}>
                Wherever I find myself next, I'm excited to continue my education, collaborate with new people, and explore new web technologies!
            </Details>
        </Wrapper>
    )
}

export default BioText

const Wrapper = styled.div`
margin-top: 1rem;
@media (min-width:770px) {
    margin-top: 2rem;
}
`
const Details = styled.div`
  font-size: 1.7rem;
  font-weight: 300;
  line-height: 2.4rem;
  max-width: 29rem;
  /* text-align: justify; */
  /* text-justify: inter-word; */
  @media (min-width:770px) {
    max-width: 32rem;
}
`
const Mern = styled.span`
    font-weight: 400;
    /* font-family: 'PT Mono';
    letter-spacing: .3rem; */
`

