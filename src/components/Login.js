import React, { useState } from "react";
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
  & label {
    font-size: 0.2em;
    margin-bottom: 10px;
  }
`;

function Login() {
  const [isNameEmpty, setNameStatus] = useState(true);
  const [name, setName] = useState("");
  const [isCompanyEmpty, setCompanyStatus] = useState(true);
  const [company, setCompany] = useState("");
  const [isPasswordEmpty, setPasswordStatus] = useState(true);
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChangeName = (e) => {
    if (e.currentTarget.value.length) {
      setNameStatus(false);
      return setName(e.currentTarget.value);
    }
    setNameStatus(true);
  };
  const handleChangeCompany = (e) => {
    if (e.currentTarget.value.length) {
      setCompanyStatus(false);
      return setCompany(e.currentTarget.value);
    }
    setCompanyStatus(true);
  };
  const handleChangePassword = (e) => {
    if (e.currentTarget.value.length) {
      setPasswordStatus(false);
      return setPassword(e.currentTarget.value);
    }
    setPasswordStatus(true);
  };

  return (
    <>
      <StyledForm id="login" onSubmit={(event) => handleSubmit(event)}>
        <label> Enter your name or the company's name</label>
        <input
          onChange={(e) => {
            handleChangeName(e);
          }}
          type="text"
          name="name"
          placeholder="name"
          autoComplete="off"
        />
        <input
          onChange={(e) => {
            handleChangeCompany(e);
          }}
          type="text"
          name="company"
          placeholder="company"
          autoComplete="off"
        />
        <input
          onChange={(e) => {
            handleChangePassword(e);
          }}
          type="password"
          name="password"
          placeholder="password"
        />
        <button
          type="submit"
          disabled={(isNameEmpty && isCompanyEmpty) || isPasswordEmpty}
        >
          send
        </button>
      </StyledForm>
    </>
  );
}

export default Login;
