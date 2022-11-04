// import packages
import styled from 'styled-components'

//import images
import Smile from "../../assets/smile.svg"
import GitHub from "../../assets/github.svg"
import LinkedIn from "../../assets/linkedin.svg"
import Montreal from "../../assets/montreal.svg"
import Arrow from "../../assets/arrow.svg"



const Fold4 = () => {
  return (
    <>
    <Wrap id='fold_4'>
        <Title>Reach Out and Say Hi</Title>
        <ContentWrap>
      <TitleWrap>
        <ImgWrap>
          <Smiley src={Smile} alt="smiley face"/>
        </ImgWrap>
      </TitleWrap>
      <FormWrap>
        <Form name="contact" method="post">
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" id="name" name="name" placeholder="Name" required />
          <input type="email" id="email" name="email" placeholder="E-mail" required />
          <textarea id="message" name="message" placeholder="Message" style={{ height: "200px" }} required />
          <Icons>
            <Links>
              <a href="https://www.linkedin.com/in/kurt-waizmann"><img src={GitHub} alt="LinkedIn Link" /></a>
              <a href="https://github.com/kurt-waizmann"><img src={LinkedIn} alt="GitHub Link" /></a>
            </Links>
            <Submit type="submit" value="Send"/>
          </Icons>
        </Form>
      </FormWrap>
      </ContentWrap>
    </Wrap>
      <FinePrint>
        <div>© 2022 Kurt Waizmann</div>
        <MTL>
          <div>Made in Montreal</div>
          <img src={Montreal} alt="Montreal logo" />
        </MTL>
        <BackTop href="#fold_1">
          <img src={Arrow} alt="Navigation arrow" />
        </BackTop>
      </FinePrint>
      </>
  )
}

export default Fold4

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10rem 0rem;
`
const TitleWrap = styled.div`
`
const Title = styled.h1`
  width: 100%;
  margin-bottom: 6rem;
  text-align: center;
  @media (min-width:770px) {
    text-align: left;
    padding-left: 7rem;
  }
`
const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 100%;
  max-width: 350px ;
  @media (min-width:770px) {
    flex-direction: row;
    gap: 15rem;
  }
`
const ImgWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`
const Smiley = styled.img`
  width: 12rem;
  margin: 1rem 0px;
  @media (min-width:770px) {
    width: 20rem;
  }
`
const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 350px ;

`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;

`
const Submit = styled.input`
  width: 8rem;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-size: 1.5rem;
  color: white;
  padding: 5px;
`
const Icons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
const Links = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
`

const FinePrint = styled.div`
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
  padding: 1rem 1rem 0px;
  opacity: .8;
  @media (min-width:770px) {
    font-size: 1.5rem;
  }
`
const MTL = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: .5rem;
`
const BackTop = styled.a`
  width: 3.5rem;
  height: 3.5rem;
  border: 1px solid #E5E0DE;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`