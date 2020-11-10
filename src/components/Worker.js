import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Geometrics from "../assets/banner.jpg";
import WorkersContext from "../Contexts/WorkersContext";
import HeartsBanner from "../assets/hearts.jpg";
import AbstractPastel from "../assets/abstract-pastel.jpg";

const WorkersWrapper = styled.div`
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

const SelectWrapper = styled.div`
  background-image: url(${AbstractPastel});
  background-size: cover;
  padding: 40px;
  display: block;
  margin: 30px auto;
  border-radius: 20px;
  width: fit-content;
  overflow: auto;
  flex-direction: column;
  justify-content: space-around;
  & div {
    width: auto;
    /* min-width: 215px; */
  }
`;

const Name = styled.div`
  margin-top: -60px;
  text-align: center;
  font-size: 1.5em;
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
  margin-bottom: -10px;
  border: none;
  font-size: 1em;
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
  margin: 20px 0;
  background-color: white;
  border-radius: 30px;
  padding: 1px;
  border: 3px red solid;
  -webkit-box-shadow: inset 0px 6px 39px 11px rgba(255, 10, 10, 0.57);
  -moz-box-shadow: inset 0px 6px 39px 11px rgba(255, 10, 10, 0.57);
  box-shadow: inset 0px 6px 39px 11px rgba(255, 10, 10, 0.57);
`;

const FavoritesWrapper = styled.div`
  background-color: #ff99d6;
  display: flex;
  flex-direction: row;
  width: auto;
  border-radius: 30px;
  justify-content: space-around;
  & div {
    width: auto;
    min-width: 215px;
  }
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

function Worker() {
  const { workers, setWorkers, favWorkers, setFavWorkers, user } = useContext(
    WorkersContext
  );

  useEffect(() => {
    const workersFromBDD = async () => {
      const result = await axios.get(`/workers/${user.company}`);
      setWorkers(result.data);
    };
    workersFromBDD();
  }, [user]);

  const [selectedWorkers, setSelecterWorkers] = useState([]);
  const [favListEmpty, setFavListStatus] = useState(true);

  let arrayOfDepartments = [];
  workers.map((worker) => {
    if (!arrayOfDepartments.includes(worker.department)) {
      arrayOfDepartments.push(worker.department);
    }
    return;
  });

  const handleClickFav = (worker) => {
    let indexInFav = favWorkers.indexOf(worker);
    let indexInWorkers = workers.indexOf(worker);
    if (indexInFav === -1) {
      setFavListStatus(false);
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
    if (favWorkers.lenght === 0) {
      setFavListStatus(true);
    }
    return setWorkers(newArrayOfWorkers);
  };

  const handleChangeSelect = (event) => {
    let arraySelectedWorkers = [];
    workers.map((worker) => {
      if (worker.department === event.currentTarget.value) {
        arraySelectedWorkers.push(worker);
      }
      return;
    });
    return setSelecterWorkers(arraySelectedWorkers);
  };

  const selectOptionsRender = (listOfDeps) => {
    listOfDeps[0] = "please choose an option";
    let renderOptions = listOfDeps.map((departement) => (
      <option value={departement}>{departement}</option>
    ));
    return (
      <select onChange={(event) => handleChangeSelect(event)}>
        {renderOptions}
      </select>
    );
  };

  const renderWorker = (worker, favorite) => {
    return (
      <>
        <DivImage>
          <StyledImg src={worker.img} alt={`picture of ${worker.name}`} />
        </DivImage>
        <Name id="name">
          {worker.name}
          <Button
            onClick={() => {
              handleClickFav(worker);
            }}
          >
            {favorite ? "😡 " : "🌟"}
          </Button>
        </Name>
        <Job>
          {worker.job}
          <span> {worker.department} </span>
        </Job>
      </>
    );
  };

  const workerDataDisplay = workers.map((worker) => (
    <Coworker key={worker.name}>
      <BackgroundWorker></BackgroundWorker>
      {renderWorker(worker, false)}
    </Coworker>
  ));
  const selectedWorkersDataDisplay = selectedWorkers.map((worker) => (
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
      {!favListEmpty && <p id="favTitle"> Favorites </p>}
      <FavoritesWrapper>
        {favWorkers && <>{favWorkerDataDisplay}</>}
      </FavoritesWrapper>
      <SelectWrapper>
        {selectOptionsRender(arrayOfDepartments)}
        {selectedWorkersDataDisplay}
      </SelectWrapper>
      <WorkersWrapper>{workerDataDisplay}</WorkersWrapper>
    </>
  );
}

export default Worker;
