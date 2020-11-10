import React, { useState, useMemo } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./Components/Header";
import Worker from "./Components/Worker";
import Home from "./Components/Home";
import Register from "./Components/Register";
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
      <Router>
        <div
          style={{
            backgroundColor: "#008b8b",
            height: "100vh",
            width: "100vw",
          }}
        >
          <Header />
          {isLogged && <Worker />}
          {!isLogged && <Home />}
        </div>
        <Route path="/register">
          {isLogged && <Redirect to="/" />}
          {!isLogged && <Register />}
        </Route>
      </Router>
    </WorkersProvider>
  );
}

export default App;
