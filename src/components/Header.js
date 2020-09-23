import React from "react";
import styled from "styled-components";
import Background from "../assets/banner.jpg";
import Login from "./Login";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-around;
  background-image: url(${Background});
  color: white;
  font-size: 4em;
  width: 95vw;
  height: fit-content;
  text-align: center;
  padding: 30px;
`;

const LoginContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

function Header() {
  return (
    <StyledHeader>
      Trombines
      <LoginContainer>
        <Login />
      </LoginContainer>
    </StyledHeader>
  );
}

export default Header;
