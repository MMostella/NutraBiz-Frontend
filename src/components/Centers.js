import styled from "styled-components";

const StyledCenters = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
`;

export default function Centers() {
  return (
    <StyledCenters>
      <h1>Weight Loss Centers</h1>
    </StyledCenters>
  );
}
