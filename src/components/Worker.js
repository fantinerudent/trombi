import React, { useState } from "react";
import styled from "styled-components";
import Geometrics from "../assets/banner.jpg";
import HeartsBanner from "../assets/hearts.jpg";

const Name = styled.div`
  text-align: center;
  font-size: 1.5vw;
  font-weight: bold;
`;

const BackgroundWorker = styled.div`
  background-image: url(${Geometrics});
  background-size: cover;
  height: 100px;
  position: relative;
  border-radius: 20px 20px 0 0;
`;
const BackgroundFavWorker = styled.div`
  background-image: url(${HeartsBanner});
  background-size: contain;
  height: 100px;
  position: relative;
  border-radius: 20px 20px 0 0;
`;

const Button = styled.button`
  position: relative;
  top: 20px;
  left: 40%;
  margin-bottom: 10px;
  border: none;
  font-size: 3em;
  background-color: white;
  border-radius: 50%;
  opacity: 0.8;
`;

const Job = styled.div`
  font-size: 1.2em;
  font-style: italic;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const DivImage = styled.div`
  height: 100px;
  width: 150px;
  display: flex;
  margin: 0 auto;
`;
const StyledImg = styled.img`
  position: relative;
  top: -60px;
  border: 2px solid white;
  max-height: 100%;
  max-width: 100%;
  border-radius: 50%;
  margin: 0 auto;
  :hover {
    transform: rotate(1turn);
    transition-duration: 3s;
  }
`;

const FavCoworker = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 20px;
  background-color: white;
  border-radius: 30px;
`;

const Coworker = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 20px;
  background-color: white;
  border: 2px solid white;
  border-radius: 20px;
  -webkit-box-shadow: inset 1px 4px 29px 6px rgba(14, 89, 99, 1);
  -moz-box-shadow: inset 1px 4px 29px 6px rgba(14, 89, 99, 1);
  box-shadow: inset 1px 4px 29px 6px rgba(14, 89, 99, 1);
`;

function Worker({ workersProps }) {
  const [workers, setWorkers] = useState(workersProps);
  const [favWorkers, setFavWorkers] = useState([]);

  const handleClickFav = (worker) => {
    let indexInFav = favWorkers.indexOf(worker);
    let indexInWorkers = workers.indexOf(worker);
    if (indexInFav === -1) {
      workers.splice(indexInWorkers, 1);
      setWorkers(workers);
      let newArrayOfFav = [...favWorkers];
      newArrayOfFav.push(worker);
      return setFavWorkers(newArrayOfFav);
    }
    favWorkers.splice(indexInFav, 1);
    setFavWorkers(favWorkers);
    let newArrayOfWorkers = [...workers];
    newArrayOfWorkers.push(worker);
    return setWorkers(newArrayOfWorkers);
  };

  const renderWorker = (worker, favorite) => {
    return (
      <>
        <DivImage>
          <StyledImg src={worker.img} alt={`picture of ${worker.name}`} />
        </DivImage>
        <Name id="name"> {worker.name} </Name>
        <Job>
          {worker.job}
          <span> {worker.department} </span>
        </Job>
        <Button
          onClick={() => {
            handleClickFav(worker);
          }}
        >
          {favorite ? "😡 " : "🌟"}
        </Button>
      </>
    );
  };

  let arrayOfDepartments = [];
  const mapForDepartments = workers.map((worker) => {
    if (!arrayOfDepartments.includes(worker.department)) {
      arrayOfDepartments.push(worker.department);
    }
  });

  const workerDataDisplay = workers.map((worker) => (
    <Coworker key={worker.name}>
      <BackgroundWorker></BackgroundWorker>
      {renderWorker(worker, false)}
    </Coworker>
  ));

  const favWorkerDataDisplay = favWorkers?.map((worker) => (
    <FavCoworker key={`${worker.name}fav`}>
      <BackgroundFavWorker></BackgroundFavWorker>
      {renderWorker(worker, true)}
    </FavCoworker>
  ));

  return (
    <>
      {favWorkers && favWorkerDataDisplay}
      {workerDataDisplay}
    </>
  );
}

export default Worker;
