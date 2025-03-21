import styled from "styled-components";
import Smile from "../../../assets/smile.svg";
import GitHub from "../../../assets/github.svg";
import LinkedIn from "../../../assets/linkedin.svg";
import FinePrint from "./FinePrint";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <>
      <Wrap id="fold_4">
        <div>
          <ContentWrap>
            <TitleWrap>
              <Title>{t("contact.title")}</Title>
              <ImgWrap>
                <Smiley src={Smile} alt="smiley face" />
              </ImgWrap>
            </TitleWrap>
            <FormWrap>
              <Form name="contact" method="post">
                <input type="hidden" name="form-name" value="contact" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder={t("contact.name")}
                  required
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={t("contact.email")}
                  required
                />
                <textarea
                  id="message"
                  name="message"
                  placeholder={t("contact.message")}
                  style={{ height: "200px" }}
                  required
                />
                <Icons>
                  <Links>
                    <a
                      href="https://github.com/kurt-waizmann"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Img src={GitHub} alt="LinkedIn Link" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/kurt-waizmann"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Img src={LinkedIn} alt="GitHub Link" />
                    </a>
                  </Links>
                  <Submit type="submit" value={t("contact.send")} />
                </Icons>
              </Form>
            </FormWrap>
          </ContentWrap>
        </div>
      </Wrap>
      <FinePrint />
    </>
  );
};

export default Contact;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10rem 0rem 5rem 0rem;
  @media (min-width: 900px) {
    min-height: 80vh;
  }
`;
const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 900px) {
    width: 100%;
  }
`;
const Title = styled.h1`
  margin-bottom: 6rem;
  text-align: center;
  @media (min-width: 900px) {
    text-align: left;
  }
`;
const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 100%;
  gap: 4rem;
  @media (min-width: 900px) {
    flex-direction: row;
    gap: 8rem;
  }
`;
const ImgWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  width: 350px;
`;
const Smiley = styled.img`
  width: 12rem;
  margin: 1rem 0px;
  @media (min-width: 900px) {
    width: 25rem;
    padding-bottom: 5rem;
  }
`;
const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 900px) {
    width: 100%;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  max-width: 300px;
`;
const Submit = styled.input`
  width: 8rem;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-size: 1.5rem;
  color: white;
  padding: 5px;

  &:hover {
    color: #4c5272;
    border: 2px solid #4c5272;
  }
`;
const Icons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const Links = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
`;
const Img = styled.img`
  &:hover {
    filter: invert(31%) sepia(9%) saturate(1727%) hue-rotate(193deg)
      brightness(55%) contrast(87%);
  }
`;
