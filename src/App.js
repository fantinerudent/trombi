import React, { useState, useMemo, useEffect } from "react";
import Header from "./Components/Header";
import axios from "axios";
import Worker from "./Components/Worker";
import { WorkersProvider } from "./Contexts/WorkersContext";

import "./App.css";


function App() {
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    const workersFromBDD = async () => {
      const result = await axios.get("/workers");
      setWorkers(result.data);
    };
    workersFromBDD();
  }, []);

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
        <Worker />
      </div>
    </WorkersProvider>
  );
}

export default App;
