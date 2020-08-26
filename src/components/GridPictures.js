import React from "react";
import Worker from "./Worker";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  @media screen and (min-width: 850px) {
    grid-template-columns: 20% 20% 20% 20%;
    grid-auto-rows: min-content;
  }
  grid-template-columns: 45% 45% ;
`;

function Gridpictures({ data }) {
  return (
    <Wrapper>
      <Worker workersProps={data} />
    </Wrapper>
  );
}

export default Gridpictures;
