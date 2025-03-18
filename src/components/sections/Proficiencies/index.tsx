import styled from "styled-components";
import BioText from "./BioText";
import { v4 as uuid } from "uuid";
import { type Proficiency } from "../../../data/proficiencies";

type ProficiencyProps = {
  proficiencies: Proficiency[];
};

const Proficiencies = ({ proficiencies }: ProficiencyProps) => {
  return (
    <Wrapper id="fold_2">
      <div>
        <InnerWrap>
          <About>About Me</About>
          <BioText />
        </InnerWrap>
      </div>
      <Divider />
      <LangWrap>
        <Deco></Deco>
        <Tools style={{ lineHeight: "4rem", width: "100%" }}>
          Tools &<br />
          Languages
        </Tools>
        <div>
          <ProfWrapper>
            {proficiencies.map((lang: Proficiency) => {
              return (
                <BoxWrap key={uuid()}>
                  <Box name={lang.name}>
                    <Image src={lang.pic} alt="technologies" />
                  </Box>
                  <Shadow />
                </BoxWrap>
              );
            })}
          </ProfWrapper>
        </div>
      </LangWrap>
    </Wrapper>
  );
};

export default Proficiencies;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
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
  @media (min-width: 900px) {
    flex-direction: center;
    align-items: flex-start;
    /* gap: 10rem; */
  }
`;
const About = styled.h1`
  /* line-height: 4rem; */
`;
const Divider = styled.div`
  @media (min-width: 900px) {
    min-height: 70rem;
    height: 100%;
    border-left: 1px solid white;
    margin: 0rem 5%;
  }
`;
const LangWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  @media (min-width: 900px) {
    margin-top: 0rem;
    align-items: flex-start;
  }
`;
const Tools = styled.h1`
  @media (max-width: 770px) {
    display: block;
    text-align: center;
  }
`;
const Deco = styled.div`
  /* visibility: hidden;
  width: 100%;
  height: 10rem;
  background-color: blue; */
`;

const ProfWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1.5rem;
  align-items: center;
  justify-content: flex-start;
  margin: 2rem 0px;
  width: 28rem;
`;
const BoxWrap = styled.div`
  position: relative;
`;
const Box = styled.div<{ name: string }>`
  width: 81.29px;
  height: 81.29px;
  border: 2px solid #ffffff;
  border-radius: 10px;
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;
  background-color: white;
  transition: transform 0.2s ease-out;
  overflow: hidden;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.5px;
  word-wrap: break-word;
  text-align: center;

  @media (min-width: 900px) {
    &:hover {
      transform: translate(0.5rem, -0.5rem);
    }

    &:after {
      content: "${(prop) => prop.name}";
      position: absolute;
      background-color: #4c5272;
      width: 100%;
      height: 100%;
      opacity: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: opacity 0.2s;
    }

    &:hover:after {
      opacity: 1;
    }
  }
`;
const Shadow = styled.div`
  width: 81.29px;
  height: 81.29px;
  border: 2px solid #ffffff;
  border-radius: 10px;
  position: absolute;
  top: 5px;
  right: 5px;
  transform: unset;
  z-index: -1;
`;
const Image = styled.img`
  width: 5rem;
`;
