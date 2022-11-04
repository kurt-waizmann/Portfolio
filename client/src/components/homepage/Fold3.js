// import packages
import styled from 'styled-components'
import { v4 as uuid } from 'uuid';


//import components
import Projects from '../Projects'

//import project info (array)
import { projectInfo } from '../info'

const Fold3 = () => {
  return (
    <Wrapper>
        <Title>Things I've Made</Title>
      <div>
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
`
const Title = styled.h1`
  /* width: 42rem; */
`