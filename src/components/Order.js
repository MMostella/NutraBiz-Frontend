import styled from "styled-components";

const StyledOrder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
`;

export default function Order() {
  return (
    <StyledOrder>
      <h1>Order Online</h1>
    </StyledOrder>
  );
}
