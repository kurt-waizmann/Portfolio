import styled from "styled-components";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <Wrapper id="fold_2">
      <InnerWrap>
        <About>{t("about.title")}</About>
        <BioWrapper>
          <Details>{t("about.bio1")}</Details>
          <Details style={{ marginTop: "2rem" }}>{t("about.bio2")}</Details>
          <Details style={{ marginTop: "2rem" }}>{t("about.bio3")}</Details>
        </BioWrapper>
      </InnerWrap>
      <InnerWrap>
        <About>Certifications and whatnot</About>
        <Details>{t("about.bio1")}</Details>
        <Details style={{ marginTop: "2rem" }}>{t("about.bio2")}</Details>
        <Details style={{ marginTop: "2rem" }}>{t("about.bio3")}</Details>{" "}
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
  border: 1px solid red;
  flex: 1;
  @media (min-width: 900px) {
    flex-direction: center;
    align-items: flex-start;
    /* gap: 10rem; */
  }
`;
const About = styled.h1`
  /* line-height: 4rem; */
`;

const BioWrapper = styled.div`
  margin-top: 1rem;
  @media (min-width: 900px) {
    margin-top: 2rem;
  }
`;
const Details = styled.div`
  font-size: 1.7rem;
  font-weight: 300;
  line-height: 2.4rem;
`;
