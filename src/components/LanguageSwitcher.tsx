import { useTranslation } from "react-i18next";
import styled from "styled-components";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  // Use i18n as any to bypass type checking temporarily
  const i18nInstance = i18n as any;

  const changeLanguage = (lng: string) => {
    i18nInstance.changeLanguage(lng);
  };

  return (
    <SwitcherContainer>
      <LanguageButton
        onClick={() => changeLanguage("en")}
        active={i18nInstance.language === "en"}
      >
        EN
      </LanguageButton>
      <LanguageButton
        onClick={() => changeLanguage("fr")}
        active={i18nInstance.language === "fr"}
      >
        FR
      </LanguageButton>
    </SwitcherContainer>
  );
};

export default LanguageSwitcher;

const SwitcherContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin: 1rem 0;
`;

const LanguageButton = styled.button<{ active: boolean }>`
  background: ${(props) => (props.active ? "#4C5272" : "transparent")};
  color: ${(props) => (props.active ? "white" : "#4C5272")};
  border: 1px solid #4c5272;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  transition: all 0.2s ease;

  &:hover {
    background: ${(props) =>
      props.active ? "#4C5272" : "rgba(76, 82, 114, 0.1)"};
  }
`;
