// import packages
import styled from 'styled-components'

// import images
import Link from "../assets/link.svg"
import GitLink from "../assets/github.svg"



const Projects = ({ name, pic, github, website, tech, detail }) => {
  return (
    <Box>
      <ImgWrap prop={pic}>
        {/* <img src={pic} /> */}
      </ImgWrap>
      <Header>
        <Title>{name}</Title>
        <Links>
          <a href={website}>
            <img src={Link} />
          </a>
          <a href={github}>
            <img src={GitLink} />
          </a>
        </Links>
      </Header>

      <Desc>{detail}</Desc>

    </Box>
  )
}

export default Projects

const Box = styled.div`
    width: 353px;
    height: 389px;
    left: 17px;
    top: 2182px;
    background: #8B96A7;
    border: 5px solid #FFFFFF;
    box-shadow: -5px 5px 0px #000000;
    border-radius: 20px;
    margin: 3rem 0px;
`
const ImgWrap = styled.div`
display: flex;
justify-content: center;
height: 16rem;
background-image: url(prop => prop.pic);
`
const Header = styled.div`
display: flex;
justify-content: space-between;
`
const Title = styled.div`
  font-weight: 700;
  font-size: 3rem;
  line-height: 150%;
`
const Links = styled.div`
`
const Desc = styled.div`
`