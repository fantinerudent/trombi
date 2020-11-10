import React, { useState, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import WorkersContext from "../Contexts/WorkersContext";

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
  const { isLogged, setIsLogged, setUser } = useContext(WorkersContext);
  const [isNameEmpty, setNameStatus] = useState(true);
  const [name, setName] = useState("");
  const [isPasswordEmpty, setPasswordStatus] = useState(true);
  const [password, setPassword] = useState("");
  const [messageLogin, setMessageLogin] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      name: name,
      password: password,
    };
    console.log(userData);

    axios
      .post("/login", userData)
      .then((response) => {
        setMessageLogin(response.data.message);
        setIsLogged(response.data.isLogged);
        setErrorMessage(response.data.errorMessage);
        userData.company = response.data.companyName;
        response.data.isLogged ? setUser(userData) : setUser([]);
        // hasError(response.data.error);
        // setNewMessageError(response.data.errorMessage);
        // setUser(response.data.userData);
        // setIsLogged(response.data.isLogged);
        // setIsAdmin(response.data.userData.isAdministrator);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleChangeName = (e) => {
    if (e.currentTarget.value.length) {
      setNameStatus(false);
      return setName(e.currentTarget.value);
    }
    setNameStatus(true);
  };

  const handleChangePassword = (e) => {
    if (e.currentTarget.value.length) {
      setPasswordStatus(false);
      return setPassword(e.currentTarget.value);
    }
    setPasswordStatus(true);
  };

  const handleLogOut = () => {
    setUser("");
    setMessageLogin("");
    setIsLogged(false);
  };

  return (
    <>
      {!isLogged && (
        <StyledForm
          action="/login"
          method="post"
          id="login"
          onSubmit={(event) => handleSubmit(event)}
        >
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
              handleChangePassword(e);
            }}
            type="password"
            name="password"
            placeholder="password"
          />
          <button type="submit" disabled={isNameEmpty || isPasswordEmpty}>
            send
          </button>
          {errorMessage && (
            <div style={{ fontSize: "10px" }}> {errorMessage} </div>
          )}
        </StyledForm>
      )}
      {messageLogin && (
        <div>
          {" "}
          {messageLogin}
          <button onClick={handleLogOut}> Log out</button>
        </div>
      )}
    </>
  );
}

export default Login;
