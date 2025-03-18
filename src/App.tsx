import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import MobileNav from "./components/navigations/MobileNav/index";
import NavBar from "./components/navigations/NavBar";
import Hero from "./components/sections/Hero";
import Proficiencies from "./components/sections/Proficiencies";
import Projects from "./components/sections/Projects";
import { projects, proficiencies } from "./data";
import Contact from "./components/sections/Contact";

const App = () => {
  return (
    <div style={{ border: "1px solid red" }}>
      <GlobalStyles />
      <MobileNav />
      <NavBar />
      <Hero />
      <Divider />
      <Proficiencies proficiencies={proficiencies} />
      <Divider />
      <Projects projects={projects} />
      <Divider />
      <Contact />
    </div>
  );
};

export default App;

const Divider = styled.hr`
  margin: 6rem 0px;
`;
