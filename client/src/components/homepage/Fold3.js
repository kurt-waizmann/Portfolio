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
      <div>
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
      </div>
    </Wrapper>

  )
}

export default Fold3

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 10rem 0rem;
    @media (min-width:770px) {
      min-height: 100vh;
  }
`
const Title = styled.h1`
  width: 100%;
  text-align: center;
  @media (min-width:770px) {
    text-align: left;
    /* padding-left: 7rem; */
  }
`
const ProjWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  gap: 2rem;
  @media (min-width:770px) {
    width:100%;
    flex-direction: row;
    /* flex-wrap: wrap; */
    justify-content: flex-start;
}
`