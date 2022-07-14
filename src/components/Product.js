import styled from "styled-components";

const StyledProduct = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
`;

export default function Product() {
  return (
    <StyledProduct>
      <h1>Product</h1>
    </StyledProduct>
  );
}
