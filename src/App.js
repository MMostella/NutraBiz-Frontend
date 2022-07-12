import "./App.css";

import styled from "styled-components";

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function App() {
  return (
    <StyledApp>
      <div className="reset">
        <button>Reset Budget</button>
      </div>
    </StyledApp>
  );
}

export default App;
