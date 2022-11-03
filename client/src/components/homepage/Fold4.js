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
      <Title>Reach Out and Say Hi</Title>
      <FormWrap>
      <Form>
        <img src={Smile} style={{ width: "120px", margin: "1rem 0px" }} />
        <input type="text" id="name" name="name" placeholder="Name" />
        <input type="text" id="email" name="email" placeholder="E-mail" />
        <textarea id="message" name="message" placeholder="Message" style={{ height: "200px" }} />
        <Icons>
          <Links>
            <a href="https://www.linkedin.com/in/kurt-waizmann"><img src={GitHub} /></a>
            <a href="https://github.com/kurt-waizmann"><img src={LinkedIn} /></a>
          </Links>
          <Submit type="submit" value="Send" />
        </Icons>
      </Form>
      </FormWrap>
        <FinePrint>
          <div>© 2022 Kurt Waizmann</div>
          <MTL>
            <div>Made in Montreal</div>
            <img src={Montreal} />
          </MTL>
          <BackTop>
            <img src={Arrow} />
          </BackTop>
        </FinePrint>
    </>
  )
}

export default Fold4

const Title = styled.h1`
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
  position: absolute;
  left: 0px;
  width: 100vw;
  height: 5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-top: 1px solid white;
  justify-content: space-between;
  padding: 1rem;
  opacity: .5;
`
const MTL = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: .5rem;
`
const BackTop =styled.div`
  width: 3.5rem;
  height: 3.5rem;
  border: 1px solid #E5E0DE;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`