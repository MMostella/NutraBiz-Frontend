import { Link } from "react-router-dom";

import styled from "styled-components";

const StyledCenters = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
`;

const linkStyle = {
  color: "black",
  // textDecoration: "none",
};

export default function Centers() {
  return (
    <StyledCenters>
      <h1>Weight Loss Centers</h1>
      <h3>
        Register to become a Weight Loss Center! Click{" "}
        <Link to="/register" style={linkStyle}>
          {" "}
          HERE
        </Link>
      </h3>
      <h3>
        Already a Center? Click{" "}
        <Link to="/login" style={linkStyle}>
          {" "}
          HERE
        </Link>
      </h3>
    </StyledCenters>
  );
}
