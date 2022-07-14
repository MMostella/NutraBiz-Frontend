import styled from "styled-components";

const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
`;

export default function About() {
  return (
    <StyledAbout>
      <h1>About Us</h1>
    </StyledAbout>
  );
}
