// import packages
import styled from 'styled-components'

// import components
import TechBox from './TechBox'

// import images
import Link from "../assets/link2.svg"
import GitLink from "../assets/link1.svg"



const Projects = ({ name, pic, github, website, tech, detail }) => {
  return (
    <Box>
      <ImgWrap pic={pic}/>
      <Wrapper>
        <Header>
          <Title>{name}</Title>
          <Links>
            {Boolean(website) === true && <>
              <a href={website} style={{display:"flex"}}>
                <Sites src={Link} alt="website link"/>
              </a>
            </>}
            <a href={github} style={{display:"flex"}}>
              <Sites src={GitLink} alt="github link"/>
            </a>
          </Links>
        </Header>
        <TechBox tech={tech} />
        <Desc>{detail}</Desc>
      </Wrapper>
    </Box>
  )
}

export default Projects

const Box = styled.div`
  width: 100%;
  min-height: 440px;
  max-width: 350px ;
  left: 17px;
  top: 2182px;
  background: #8B96A7;
  border: 5px solid #FFFFFF;
  box-shadow: -5px 5px 0px #000000;
  border-radius: 20px;
  margin: 3rem 0px;
  overflow: hidden;
`
const Wrapper = styled.div`
  padding: 1rem 1rem;
`
const ImgWrap = styled.div`
  display: flex;
  justify-content: center;
  height: 20rem;
  background-image: url(${prop => prop.pic});
  background-position: top;
  background-size: cover;
`
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Title = styled.div`
  font-weight: 700;
  font-size: 3rem;
  line-height: 150%;
`
const Links = styled.div`
  display: flex;
  gap: 1rem;
`
const Sites = styled.img`
  width: 3.5rem;
  color: red;
`
const Desc = styled.div`
  font-weight: 300;
  font-size: 16px;
  line-height: 150%;
`