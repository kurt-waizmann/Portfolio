import styled from "styled-components";

import Montreal from "../../../assets/montreal.svg";
import Arrow from "../../../assets/arrow.svg";

const FinePrint = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Wrapper>
      <div>© {currentYear} Kurt Waizmann</div>
      <MTL>
        <div>Made in Montreal</div>
        <img src={Montreal} alt="Montreal logo" />
      </MTL>
      <BackTop href="#fold_1">
        <img src={Arrow} alt="Navigation arrow" />
      </BackTop>
    </Wrapper>
  );
};

export default FinePrint;

const Wrapper = styled.div`
  margin-top: 2rem;
  position: absolute;
  left: 0px;
  width: 100vw;
  height: 6rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  border-top: 1px solid white;
  justify-content: space-between;
  padding: 1rem 2rem 0px;
  opacity: 0.8;
  @media (min-width: 770px) {
    font-size: 1.5rem;
  }
`;
const MTL = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  @media (min-width: 770px) {
    position: relative;
    left: -5rem;
  }
`;
const BackTop = styled.a`
  width: 3.5rem;
  height: 3.5rem;
  border: 1px solid #e5e0de;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  &:hover {
    border: 1px solid #4c5272;
    color: #4c5272;
  }
`;
