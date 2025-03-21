import styled from "styled-components";

import Picture from "../../../assets/portrait.png";

const Portrait = () => {
  return (
    <PortraitWrap>
      <Pic src={Picture} alt="photo of Kurt" />
      <Circle />
    </PortraitWrap>
  );
};

export default Portrait;

const PortraitWrap = styled.div`
  position: relative;
`;
const Pic = styled.img`
  position: absolute;
  z-index: 1;
  width: 15rem;
`;
const Circle = styled.div`
  position: relative;
  width: 15rem;
  height: 15rem;
  top: -15px;
  left: -15px;
  background-color: #4c5272;
  border-radius: 50%;
`;
