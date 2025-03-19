import styled from "styled-components";
import Link from "../../../assets/link2.svg";
import GitLink from "../../../assets/link1.svg";
import TechBox from "./TechBox";
import { Project } from "../../../data/projects";
type ProjectProps = Project;

const ProjectCard = ({
  name,
  pic,
  github,
  website,
  tech,
  description,
}: ProjectProps) => {
  return (
    <Box>
      <ImgWrap pic={pic} />
      <Wrapper>
        <Header>
          <Title>{name}</Title>
          <Links>
            {Boolean(github) ? (
              <a
                href={github}
                style={{ display: "flex" }}
                target="_blank"
                rel="noreferrer"
              >
                <Sites src={GitLink} alt="github link" />
              </a>
            ) : null}
            {Boolean(website) ? (
              <a
                href={website}
                style={{ display: "flex" }}
                target="_blank"
                rel="noreferrer"
              >
                <Sites src={Link} alt="website link" />
              </a>
            ) : null}
          </Links>
        </Header>
        <TechBox tech={tech} />
        <Desc>{description}</Desc>
      </Wrapper>
    </Box>
  );
};

export default ProjectCard;

const Box = styled.div`
  height: 44rem;
  max-width: 32rem;
  width: 100%;
  background: #343635;
  border: 5px solid #343635;
  box-shadow: -5px 5px 0px #ffffff;
  border-radius: 20px;
  overflow: hidden;
`;
const Wrapper = styled.div`
  padding: 1rem 1rem;
`;

interface ImgWrapProps {
  pic: string;
}

const ImgWrap = styled.div<ImgWrapProps>`
  display: flex;
  justify-content: center;
  height: 20rem;
  background-image: url(${(prop) => prop.pic});
  background-position: top;
  background-size: cover;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.div`
  font-weight: 700;
  font-size: 3rem;
  line-height: 150%;
`;
const Links = styled.div`
  display: flex;
  gap: 1rem;
`;
const Sites = styled.img`
  width: 3.5rem;
  &:hover {
    filter: invert(31%) sepia(9%) saturate(1727%) hue-rotate(193deg)
      brightness(55%) contrast(87%);
  }
`;
const Desc = styled.div`
  font-weight: 200;
  font-size: 1.5rem;
  line-height: 150%;
`;
