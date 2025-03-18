import styled from "styled-components";
import BioText from "./BioText";

const AboutMe = () => {
  return (
    <Wrapper id="fold_2">
      <InnerWrap>
        <About>About Me</About>
        <BioText />
      </InnerWrap>
      <InnerWrap>
        <About>Certifications and whatnot</About>
        <BioText />
      </InnerWrap>
    </Wrapper>
  );
};

export default AboutMe;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-evenly; */
  /* align-items: center; */
  width: 100%;
  border: 1px solid blue;
  @media (min-width: 900px) {
    flex-direction: row;
    align-items: flex-start;
    margin: 18rem 0rem;
    min-height: 70vh;
  }
`;

const InnerWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 32rem;
  border: 1px solid red;
  @media (min-width: 900px) {
    flex-direction: center;
    align-items: flex-start;
    /* gap: 10rem; */
  }
`;
const About = styled.h1`
  /* line-height: 4rem; */
`;
