import styled from "styled-components";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../../LanguageSwitcher";

// Define the prop type
interface CVProps {
  text: string;
}

const NavBar = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Link href="#fold_2">{t("nav.about")}</Link>
      <Link href="#fold_3">{t("nav.projects")}</Link>
      <Link href="#fold_4">{t("nav.contact")}</Link>
      <LanguageSwitcher />
      <CV
        href="https://drive.google.com/file/d/192-w0SLVz4kNtf_eL_pgIPm_mIBfy5iH/view"
        target="_blank"
        rel="noreferrer"
        text={t("nav.resume")}
      />
    </Wrapper>
  );
};

export default NavBar;

const Wrapper = styled.nav`
  width: 100%;
  display: none;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  gap: 8rem;
  margin-bottom: 5rem;
  @media (min-width: 900px) {
    display: flex;
  }
`;
const Link = styled.a`
  position: relative;
  text-decoration: none;
  font-family: "PT Mono";
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 22px;
  color: #ffffff;
  padding: 0 3px;
  text-shadow: -1px 1px 0px black;

  &:after {
    content: "";
    position: absolute;
    background-color: #4c5272;
    height: 2px;
    width: 0;
    left: 0;
    bottom: -5px;
    transition: 0.3s;
  }
  &:hover:after {
    width: 100%;
  }
`;
const CV = styled.a<CVProps>`
  position: relative;
  text-decoration: none;
  font-family: "PT Mono";
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 22px;
  color: #ffffff;
  width: 10rem;
  height: 5rem;
  border: 1px solid #ffffff;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:after {
    content: "${(props) => props.text}";
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    text-shadow: -1px 1px 0px black;
    width: 10rem;
    height: 5rem;
    border: 1px solid #ffffff;
    border-radius: 10px;
    bottom: -1px;
    right: -1px;
    transition: 0.3s;
  }

  &:hover:after {
    bottom: -1rem;
    right: -1rem;
  }
`;
