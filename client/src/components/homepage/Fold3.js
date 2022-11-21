// import packages
import styled from 'styled-components'
import { v4 as uuid } from 'uuid';


//import components
import Projects from '../Projects'

//import project info (array)
import { projectInfo } from '../info'

const Fold3 = () => {
  return (
    <Wrapper id='fold_3'>
      <InnerWrap>
        <Title>Things I've Made</Title>
      <ProjWrap>
        {
          projectInfo.map(project => {
            return <Projects
              key={uuid()}
              name={project.name}
              pic={project.pic}
              github={project.github}
              website={project.website}
              tech={project.tech}
              detail={project.detail}
            />
          })
        }
      </ProjWrap>
      </InnerWrap>
    </Wrapper>

  )
}

export default Fold3

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin: 10rem 0rem;
    @media (min-width:770px) {
      min-height: 100vh;
  }
`
const Title = styled.h1`
  text-align: center;
  @media (min-width:770px) {
    text-align: left;
    width: 105rem;
  }
`
const InnerWrap = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const ProjWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 3rem;
  gap: 2rem;

  @media (min-width:770px) {
    flex-direction: row;
    max-width: 105rem;
  } 
`