import styled from "styled-components";

const BioText = () => {
  return (
    <Wrapper>
      <Details>
        My passion for storytelling took me to the Mel Hoppenheim School of
        Cinema, where I studied film production. There, I wrote and directed my
        own projects and even got hands-on in the post production process by
        stepping in as sound designer. Now I hope to apply the invaluable
        lessons I learned to my journey in web development.
      </Details>
      <Details style={{ marginTop: "2rem" }}>
        I received my education in full stack development — the MERN stack.
        Personally, I lean more towards front-end development. I often work in
        React.js and I also have a special fondness for CSS.
      </Details>
      <Details style={{ marginTop: "2rem" }}>
        Wherever I find myself next, I'm excited to take new steps in my
        journey, collaborate with the people I meet along the way, and explore
        the endless potential of new web technologies.
      </Details>
    </Wrapper>
  );
};

export default BioText;

const Wrapper = styled.div`
  margin-top: 1rem;
  @media (min-width: 770px) {
    margin-top: 2rem;
  }
`;
const Details = styled.div`
  font-size: 1.7rem;
  font-weight: 300;
  line-height: 2.4rem;
  max-width: 29rem;
  @media (min-width: 770px) {
    max-width: rem;
  }
`;
