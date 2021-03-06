import React, { useState, useContext } from "react";
import WorkersContext from "../Contexts/WorkersContext";
import styled from "styled-components";
import axios from "axios";

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

const Register = () => {
  const { isLogged, setIsLogged, setUser } = useContext(WorkersContext);
  const [isNameEmpty, setNameStatus] = useState(true);
  const [name, setName] = useState("");
  const [isCompanyEmpty, setCompanyStatus] = useState(true);
  const [company, setCompany] = useState("");
  const [isPasswordEmpty, setPasswordStatus] = useState(true);
  const [isConfirmationPasswordEmpty, setConfirmationPasswordStatus] = useState(
    true
  );
  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");
  const [messageLogin, setMessageLogin] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // const userData = {
    //   name: name,
    //   company: company,
    //   password: password,
    // };
    // console.log(userData);
    if (password !== confirmationPassword) {
      setErrorMessage("You must use the same password for confirmation");
    }
    // axios
    //   .post("/login", userData)
    //   .then((response) => {
    //     setMessageLogin(response.data.message);
    //     setIsLogged(response.data.isLogged);
    //     setErrorMessage(response.data.errorMessage);
    //     response.data.isLogged ? setUser(userData) : setUser([]);
    //     // hasError(response.data.error);
    //     // setNewMessageError(response.data.errorMessage);
    //     // setUser(response.data.userData);
    //     // setIsLogged(response.data.isLogged);
    //     // setIsAdmin(response.data.userData.isAdministrator);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
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

  const handleChangeConfirmationPassword = (e) => {
    if (e.currentTarget.value.length) {
      setConfirmationPasswordStatus(false);
      return setConfirmationPassword(e.currentTarget.value);
    }
    setConfirmationPasswordStatus(true);
  };
  return (
    <>
      <StyledForm
        action="/register"
        method="post"
        id="login"
        onSubmit={(event) => handleSubmit(event)}
      >
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
        <input
          onChange={(e) => {
            handleChangeConfirmationPassword(e);
          }}
          type="password"
          name="confirmationpassword"
          placeholder="confirmation password"
        />
        <button
          type="submit"
          disabled={(isNameEmpty && isCompanyEmpty) || isPasswordEmpty}
        >
          send
        </button>
        {errorMessage && (
          <div style={{ fontSize: "10px" }}> {errorMessage} </div>
        )}
      </StyledForm>
    </>
  );
};

export default Register;
