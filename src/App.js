import React, { useState, useMemo } from "react";
import Header from "./components/Header";
import mockedData from "./assets/data/fakedata.json";
import Gridpictures from "./components/GridPictures";
import { WorkersProvider } from "./Contexts/WorkersContext";
import "./App.css";

function App() {
  const [workers, setWorkers] = useState(mockedData);
  const [favWorkers, setFavWorkers] = useState([]);

  const providerValue = useMemo(
    () => ({
      workers,
      setWorkers,
      favWorkers,
      setFavWorkers,
    }),
    [workers, setWorkers, favWorkers, setFavWorkers]
  );

  return (
    <WorkersProvider value={providerValue}>
      <div style={{ backgroundColor: "#008b8b" }}>
        <Header />
        <Gridpictures />
      </div>
    </WorkersProvider>
  );
}

export default App;
