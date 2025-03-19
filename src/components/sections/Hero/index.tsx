import styled from "styled-components";
import Portrait from "./Portrait";
import Zig from "../../../assets/ZigZagOrange.svg";
import Zag from "../../../assets/ZigZagYellow.svg";
import Logo from "./Logo";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { slideFadeIn, swirling } from "./animations/animation";

const Hero = () => {
  const { t } = useTranslation();
  const arr = [...Array(10)];
  return (
    <Wrapper>
      <ContentWrap>
        <TextWrap>
          <Logo />
          <TitleWrapper>
            {arr.map((_, i) => (
              <Title as={motion.h1} {...swirling(i, i * 0.1)} key={i}>
                <Name>Kurt Waizmann</Name>
                <Job>
                  <div>{t("hero.job")}</div>
                </Job>
              </Title>
            ))}
          </TitleWrapper>
          <Subtext as={motion.div} {...slideFadeIn}>
            <p>{t("hero.bio")}</p>
            <Lookout>{t("hero.subtext")}</Lookout>
          </Subtext>
        </TextWrap>
        <PicWrapper>
          <ZigZag1 src={Zig} alt="zigzag decoration" />
          <Portrait />
          <ZigZag2 src={Zag} alt="zigzag decoration" />
        </PicWrapper>
      </ContentWrap>
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.div`
  border: 1px solid yellow;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 770px) {
    min-height: 90vh;
  }
`;

const ContentWrap = styled.div`
  border: 1px solid green;

  @media (min-width: 900px) {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    margin-bottom: 8rem;
    min-height: 70vh;
  }
`;

const TextWrap = styled.div`
  max-width: 25.7rem;
  @media (min-width: 900px) {
    max-width: 40rem;
  }
`;
const Title = styled.div`
  position: absolute;
  color: #4c5272;
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 3.5rem;
`;

const TitleWrapper = styled.div`
  position: relative;
  height: 100px;
  @media (min-width: 900px) {
    height: 150px;
  }
`;

const Name = styled.h1`
  display: none;
  @media (min-width: 900px) {
    display: block;
    color: white;
    margin: 0px;
  }
`;
const Job = styled.div`
  display: flex;
  flex-direction: column;
  text-shadow: -2px 2px 0px #e76a46;

  @media (min-width: 900px) {
    flex-direction: row;
    gap: 0.8rem;
  }
`;
const Subtext = styled.div`
  line-height: 2.4rem;
`;
const Lookout = styled.p`
  margin-top: 10px;
`;
const PicWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ZigZag1 = styled.img`
  margin: 1rem;
  position: relative;
  left: 17rem;
  height: 3rem;
  @media (min-width: 900px) {
    left: 45rem;
    bottom: 8rem;
  }
`;
const ZigZag2 = styled.img`
  margin: 1rem;
  position: relative;
  left: -17rem;
  height: 3rem;
  @media (min-width: 900px) {
    left: -12rem;
    top: 6rem;
  }
`;
