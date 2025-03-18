import styled from "styled-components";
import { v4 as uuid } from "uuid";
import { proficiencies, type Proficiency } from "../../../data/proficiencies";

const Proficiencies = () => {
  return (
    <Wrapper id="fold_2">
      <LangWrap>
        <Tools style={{ lineHeight: "4rem", width: "100%" }}>
          Tools &<br />
          Languages
        </Tools>
        <div>
          <ProfWrapper>
            {proficiencies.map((lang: Proficiency) => {
              const { name, icon: Icon, size = "50px" } = lang;

              return (
                <BoxWrap key={uuid()}>
                  <Box name={name}>
                    <Icon color="#4c5272" size={size} />
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

const ProfWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1.5rem;
  align-items: center;
  justify-content: flex-start;
  margin: 2rem 0px;
  /* width: 28rem; */
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
