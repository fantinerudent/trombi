
import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
    background-color : #ff99d6;
    display: flex;
    width: auto;
    height: 10%;
    font-size: 2em;
    justify-content: space-around;
    margin-top: 20px;
`;

const Home = () => {
    return ( 
        <Title>
            Il était une fois
        </Title>
     );
}
 
export default Home;