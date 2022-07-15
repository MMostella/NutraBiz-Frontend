import Logo from "../pictures/NutraBiz.png";

import styled from "styled-components";

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 70vh;
`;

export default function Home() {
  return (
    <StyledHome>
      <img src={Logo} alt="large logo" />
    </StyledHome>
  );
}
