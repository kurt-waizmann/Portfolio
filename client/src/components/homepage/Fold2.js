// import packages
import styled from 'styled-components'

//import info
import Languages from '../Languages'
import BioText from './BioText'

const Fold2 = () => {
  return (
    <Wrapper id='fold_2'>
      <div>
        <h1>About Me</h1>
        <InnerWrap>
          <div>
            <BioText/>
          </div>
          <LangWrap>
            <Tools style={{lineHeight:"4rem", width:"100%"}}>Tools &<br/>Languages</Tools>
            <Languages />
          </LangWrap>
        </InnerWrap>
      </div>
    </Wrapper>

  )
}

export default Fold2

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media (min-width:770px) {
  margin: 18rem 0rem;
  min-height: 70vh;
}
`

const InnerWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width:770px) {
    flex-direction: row;
    align-items: center;
    gap: 10rem;
}
`
const LangWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Tools = styled.h1`
  margin-top: 5rem;
`