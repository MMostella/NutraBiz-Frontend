import styled from "styled-components";

const StyledRegister = styled.div`
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

export default function Register() {
  return (
    <StyledRegister>
      <form>
        <label>Business Name</label>
        <input type="text" name="businessName" />
        <label>Business Email</label>
        <input type="email" name="businessEmail" />
        <label>Phone Number</label>
        <input type="tel" name="businessPhone" />
        <label>Business Address</label>
        <input type="text" name="businessAddress" />
        <label>Business ITIN Number</label>
        <input type="number" name="businessTaxNumber" />
        <input type="submit" value="Submit" />
      </form>
    </StyledRegister>
  );
}
