// import packages
import styled from 'styled-components'

//import images
import Smile from "../../assets/smile.svg"
import GitHub from "../../assets/github.svg"
import LinkedIn from "../../assets/linkedin.svg"
import Montreal from "../../assets/montreal.svg"
import Arrow from "../../assets/arrow.svg"



const Fold4 = () => {

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <Wrap>
      <TitleWrap>
        <Title>Reach Out and Say Hi</Title>
        <ImgWrap>
          <img src={Smile} alt="smiley face" style={{ width: "120px", margin: "1rem 0px" }} />
        </ImgWrap>
      </TitleWrap>
      <FormWrap>
        <Form name="contact" method="POST" netlify data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="text" id="name" name="name" placeholder="Name" required />
          <input type="email" id="email" name="email" placeholder="E-mail" required />
          <textarea id="message" name="message" placeholder="Message" style={{ height: "200px" }} required />
          <Icons>
            <Links>
              <a href="https://www.linkedin.com/in/kurt-waizmann"><img src={GitHub} alt="LinkedIn Link" /></a>
              <a href="https://github.com/kurt-waizmann"><img src={LinkedIn} alt="GitHub Link" /></a>
            </Links>
            <Submit type="submit" />
          </Icons>
        </Form>
      </FormWrap>
      <FinePrint>
        <div>© 2022 Kurt Waizmann</div>
        <MTL>
          <div>Made in Montreal</div>
          <img src={Montreal} alt="Montreal logo" />
        </MTL>
        <BackTop>
          <img src={Arrow} alt="Navigation arrow" />
        </BackTop>
      </FinePrint>
    </Wrap>
  )
}

export default Fold4

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const TitleWrap = styled.div`
`
const Title = styled.h1`
`
const ImgWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`
const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
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
  /* position: absolute; */
  left: 0px;
  width: 100vw;
  height: 4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-top: 1px solid white;
  justify-content: space-between;
  padding: 1rem 1rem 0px;
  opacity: .8;
`
const MTL = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: .5rem;
`
const BackTop = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  border: 1px solid #E5E0DE;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`