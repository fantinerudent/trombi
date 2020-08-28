import React, { useContext } from "react";
import Worker from "./Worker";
import styled from "styled-components";
import WorkersContext from "../Contexts/WorkersContext";

const WrapperWorkers = styled.div`
  justify-content: center;
  position: relative;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 45% 45%;
  @media screen and (min-width: 850px) {
    grid-template-columns: 20% 20% 20% 20%;
    grid-auto-rows: fit-content;
  }
`;

function Gridpictures() {
  return (
    <>
      <Worker />
    </>
  );
}

export default Gridpictures;
