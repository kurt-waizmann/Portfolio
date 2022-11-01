// import packages
import styled from 'styled-components'

//import components
import Projects from '../Projects'
// import { projectInfo } from '../info'

const Fold3 = () => {
  return (
    <>
      <h1>Things I've Made</h1>
      <Wrapper>
        <Projects />
      </Wrapper>
    </>
  )
}

export default Fold3

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`