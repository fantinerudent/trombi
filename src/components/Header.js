import React from "react";
import styled from "styled-components";
import Background from "../assets/banner.jpg";


const StyledHeader = styled.div`
  background-image: url(${Background});
  color: white;
  font-size: 4em;
  width: 95vw;
  height: fit-content;
  text-align: center;
  padding: 30px;
`;

function Header() {
  return <StyledHeader> Trombines </StyledHeader>;
}

export default Header;
