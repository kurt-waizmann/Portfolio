import styled from "styled-components";
import { v4 as uuid } from "uuid";
import ProjectCard from "./ProjectCard";
import { projects } from "../../../data/projects";

const Projects = () => {
  return (
    <Wrapper id="fold_3">
      <InnerWrap>
        <Title>Things I've Made</Title>
        <ProjWrap>
          {projects.map((project) => {
            return (
              <ProjectCard
                key={uuid()}
                name={project.name}
                pic={project.pic}
                github={project.github}
                website={project.website}
                tech={project.tech}
                description={project.description}
              />
            );
          })}
        </ProjWrap>
      </InnerWrap>
    </Wrapper>
  );
};

export default Projects;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin: 10rem 0rem;
  @media (min-width: 900px) {
    min-height: 100vh;
  }
`;
const Title = styled.h1`
  text-align: center;
  @media (min-width: 900px) {
    text-align: left;
  }
`;
const InnerWrap = styled.div`
  /* display: flex;
flex-direction: column;
justify-content: center;
align-items: center; */
`;
const ProjWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 3rem;
  gap: 4rem;

  @media (min-width: 900px) {
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 105rem;
  }
`;
