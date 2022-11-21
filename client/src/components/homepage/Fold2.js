// import packages
import styled from 'styled-components'

//import info
import Languages from '../Languages'
import BioText from '../BioText'

const Fold2 = () => {
  return (
    <Wrapper id='fold_2'>
      <div>
        <About>About Me</About>
        <InnerWrap>
          <BioText />
        </InnerWrap>
      </div>
      <Divider/>
      <LangWrap>
        <Deco></Deco>
        <Tools style={{ lineHeight: "4rem", width: "100%" }}>Tools &<br />Languages</Tools>
        <Languages />
      </LangWrap>
    </Wrapper>

  )
}

export default Fold2

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: flex-start;
@media (min-width:770px) {
  margin: 18rem 0rem;
  min-height: 70vh;
  flex-direction: row;
  gap: 10rem;
}
`

const InnerWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width:770px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 10rem;
}
`
const About = styled.h1`
  line-height: 4rem;
`
const Divider = styled.div`
  @media (min-width:770px) {
    height: 50rem;
    border-left: 1px solid white;    
}
`
const LangWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 5rem;
  @media (min-width:770px) {
  margin-top: 0rem;
}
`
const Tools = styled.h1`
`
const Deco = styled.div`
  /* visibility: hidden;
  width: 100%;
  height: 10rem;
  background-color: blue; */
`