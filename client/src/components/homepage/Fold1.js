
// import packages
import styled from 'styled-components'

// import components
import Logo from "../Logo";
import Portrait from '../Portrait';
import HamMenu from '../HamMenu';
import NavBar from '../NavBar';
import Zig from '../../assets/ZigZagOrange.svg'
import Zag from '../../assets/ZigZagYellow.svg'


const Fold1 = () => {
  return (
    <>
      <HamMenu />
    <Wrapper>
      <NavBar />
      <ContentWrap>
        <TextWrap>
          <Logo />
          <Title>
            <Name>Kurt Waizmann</Name>
            <Job>
              <div>Web</div>
              <div>Developer</div>
            </Job>
          </Title>
          <Subtext>
            <p>Hi, I’m Kurt. I’m a front-end web developer located In Montreal, Quebec.</p>
            <Lookout>On the lookout for new opportunities.</Lookout>
          </Subtext>
        </TextWrap>
        <PicWrapper>
          <ZigZag1 src={Zig} alt="zigzag decoration" />
          <Portrait />
          <ZigZag2 src={Zag} alt="zigzag decoration" />
        </PicWrapper>
      </ContentWrap>
    </Wrapper>
    </>
  )
}

export default Fold1

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width:770px) {
    min-height: 90vh;

  }
`
const ContentWrap = styled.div`
@media (min-width:770px) {
		display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    /* margin: 12rem 0px; */
    margin-bottom: 8rem;
    min-height: 70vh;
  }
`

const TextWrap = styled.div`
  max-width: 25.7rem;
  @media (min-width:770px) {
  max-width: 40rem;
  }
`
const Title = styled.div`
  color: #4C5272;
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  /* text-shadow: -2px 2px 0px #E76A46; */
  line-height: 3.5rem;
`
const Name = styled.h1`
  display: none;
  @media (min-width:770px) {
    display: block;
    color: white;
    margin: 0px;
  }
`
const Job = styled.div`
  display: flex;
  flex-direction: column;
  text-shadow: -2px 2px 0px #E76A46;

  @media (min-width:770px) {
    flex-direction: row;
    gap: .8rem;
  }
`
const Subtext = styled.div`
  line-height: 2.4rem;
`
const Lookout = styled.p`
  margin-top: 10px;
`
const PicWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const ZigZag1 = styled.img`
  margin: 1rem;
  position: relative;
  left: 17rem;
  height: 3rem;
  @media (min-width:770px) {
	left: 45rem;
  bottom: 8rem;
  }
  `
const ZigZag2 = styled.img`
  margin: 1rem;
  position: relative;
  left: -17rem;
  height: 3rem;
  @media (min-width:770px) {
    left: -12rem;
    top: 6rem;
  }
`