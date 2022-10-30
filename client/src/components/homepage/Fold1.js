// import packages
import styled from 'styled-components'

// import components
import Logo from "../Logo";
import Portrait from '../Portrait';
import MenuButton from '../MenuButton';
import Zig from '../../assets/ZigZagOrange.svg'
import Zag from '../../assets/ZigZagYellow.svg'


const Fold1 = () => {
  return (
    <Wrapper>
      <MenuButton />
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <TextWrap>
        <Title>
          <Job>Full Stack Web Dev</Job>
        </Title>
        <Subtext>Hi, I’m Kurt. I’m a web developer located In Montreal, Quebec. On the lookout for new opportunities.</Subtext>
      </TextWrap>
      <PicWrapper>
        <ZigZag1 src={Zig} />
        <Portrait />
        <ZigZag2 src={Zag} />
      </PicWrapper>
    </Wrapper>
  )
}

export default Fold1

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const LogoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 4rem;
`
const TextWrap = styled.div`
  width: 60%;
`
const Title = styled.div`
  font-size: 3.4rem;
  font-weight: 100;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  letter-spacing: 0.1em;
`
const Job = styled.div`
  color: #4C5272;
`
const Subtext = styled.p`
  font-size: 1.7rem;
  font-weight: 100;
  line-height: 2.2rem;
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
  `
const ZigZag2 = styled.img`
  margin: 1rem;
  position: relative;
  left: -17rem;
  height: 3rem;
`