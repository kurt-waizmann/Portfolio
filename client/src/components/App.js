// import packages
import styled from 'styled-components'

// component imports
import GlobalStyles from "./GlobalStyles";
import Fold1 from "./homepage/Fold1";
import Fold2 from "./homepage/Fold2";
import Fold3 from "./homepage/Fold3";
import Fold4 from "./homepage/Fold4";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Fold1 />
      <Divider />
      <Fold2 />
      <Divider />
      <Fold3 />
      <Divider />
      <Fold4 />
    </>
  );
}

export default App;

const Divider = styled.hr`
  margin: 6rem 0px;
`