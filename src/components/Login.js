import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: violet;
  border-radius: 20px;
  & input,
  & button {
      background-color: lightyellow;
    font-style: italic;
    margin-bottom: 10px;
    height: 30px;
  }
`;

function Login() {
    const handleSubmit = (event) => {
        event.preventDefault();
    };

  return (
    <>
      <StyledForm id="login" onSubmit={(event) => handleSubmit(event)}>
        <input type="text" name="name" placeholder="name" />
        <input type="password" name="password" placeholder="password" />
        <button type="submit" > send </button>
      </StyledForm>
    </>
  );
}

export default Login;
