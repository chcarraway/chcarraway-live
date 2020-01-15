import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "../Header/index";
import GamesList from "../Games/List";
import EditGame from "../Games/Edit";
import CreateGame from "../Games/Create";
import CreateUser from "../Users/Create";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={GamesList} />
        <Route path="/edit/:id" component={EditGame} />
        <Route path="/create" component={CreateGame} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
