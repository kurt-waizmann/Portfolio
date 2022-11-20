// import packages
import styled from 'styled-components'

//import images
import Smile from "../../assets/smile.svg"
import GitHub from "../../assets/github.svg"
import LinkedIn from "../../assets/linkedin.svg"


//import components
import FinePrint from '../FinePrint'


const Fold4 = () => {
  return (
    <>
    <Wrap id='fold_4'>
      <div>
        <Title>Reach Out, Say Hi</Title>
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
              <a href="https://www.linkedin.com/in/kurt-waizmann"><Img src={GitHub} alt="LinkedIn Link" /></a>
              <a href="https://github.com/kurt-waizmann"><Img src={LinkedIn} alt="GitHub Link" /></a>
            </Links>
            <Submit type="submit" value="Send"/>
          </Icons>
        </Form>
      </FormWrap>
      </ContentWrap>
      </div>
    </Wrap>
    <FinePrint />
      </>
  )
}

export default Fold4

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10rem 0rem;
  @media (min-width:770px) {
      min-height: 80vh;
  }
`
const TitleWrap = styled.div`
  @media (min-width:770px) {
    width: 100%;
  }
`
const Title = styled.h1`
  width: 100%;
  margin-bottom: 6rem;
  text-align: center;
  @media (min-width:770px) {
    text-align: left;
  }
`
const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 100%;
  gap: 4rem;
  @media (min-width:770px) {
    flex-direction: row;
  }
`
const ImgWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  width: 350px ;

`
const Smiley = styled.img`
  width: 12rem;
  margin: 1rem 0px;
  @media (min-width:770px) {
    width: 25rem;
    padding-bottom: 5rem;
  }
`
const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width:770px) {
    width:100%;
  }
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  max-width: 350px ;
`
const Submit = styled.input`
  width: 8rem;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-size: 1.5rem;
  color: white;
  padding: 5px;

      &:hover {
      color: #4C5272;
      border: 2px solid #4C5272;
    }
    
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
const Img = styled.img`
  &:hover{
    filter: invert(31%) sepia(9%) saturate(1727%) hue-rotate(193deg) brightness(55%) contrast(87%);
  }
`