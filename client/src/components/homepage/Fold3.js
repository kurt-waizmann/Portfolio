// import packages
import styled from 'styled-components'

//import components
import Projects from '../Projects'

//import project info (array)
import { projectInfo } from '../info'

const Fold3 = () => {
  console.log("Fold 3 info", projectInfo)
  return (
    <>
      <h1>Things I've Made</h1>
      <Wrapper>
        {
          projectInfo.map(project => {
            return <Projects
              name={project.name}
              pic={project.pic}
              github={project.github}
              website={project.website}
              tech={project.tech}
              detail={project.detail}
            />
          })
        }
      </Wrapper>
    </>
  )
}

export default Fold3

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`