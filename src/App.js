import React, { useState, useMemo } from "react";
import Header from "./Components/Header";
import Worker from "./Components/Worker";
import { WorkersProvider } from "./Contexts/WorkersContext";

import "./App.css";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [workers, setWorkers] = useState([]);
  const [user, setUser] = useState([]);
  const [favWorkers, setFavWorkers] = useState([]);

  const providerValue = useMemo(
    () => ({
      workers,
      setWorkers,
      favWorkers,
      setFavWorkers,
      isLogged,
      setIsLogged,
      user,
      setUser,
    }),
    [
      workers,
      setWorkers,
      favWorkers,
      setFavWorkers,
      isLogged,
      setIsLogged,
      user,
      setUser,
    ]
  );

  return (
    <WorkersProvider value={providerValue}>
      <div style={{ backgroundColor: "#008b8b" }}>
        <Header />
        {isLogged && <Worker />}
      </div>
    </WorkersProvider>
  );
}

export default App;
