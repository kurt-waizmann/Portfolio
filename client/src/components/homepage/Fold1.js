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
      <TextWrap>
        <Logo />
        <Title>
          <div>Full Stack</div>
          <div>Web Dev</div>
        </Title>
        <Subtext>
          <p>Hi, I’m Kurt. I’m a web developer located In Montreal, Quebec.</p>
          <Lookout>On the lookout for new opportunities.</Lookout>
        </Subtext>
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
const TextWrap = styled.div`
  width: 60%;
  width: 25.7rem;
`
const Title = styled.div`
  color: #4C5272;
  font-size: 3.4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: -2px 2px 0px #E76A46;
  line-height: 3.5rem;
`
const Subtext = styled.p`
  font-size: 1.7rem;
  font-weight: 200;
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
  `
const ZigZag2 = styled.img`
  margin: 1rem;
  position: relative;
  left: -17rem;
  height: 3rem;
`