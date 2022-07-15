import styled from "styled-components";

const StyledLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: -10%;

  form {
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    border-radius: 50px;
    background-color: lightGrey;
    padding: 20%;
  }
  label {
    display: flex;
    justify-content: center;
    margin: 5% 0;
    font-size: large;
  }
  input {
    margin: 2%;
  }
`;

export default function Login() {
  return (
    <StyledLogin>
      <form>
        <label>Username</label>
        <input type="text" name="username" />
        <label>Password</label>
        <input type="password" name="password" />
        <input type="submit" value="Submit" />
      </form>
    </StyledLogin>
  );
}
