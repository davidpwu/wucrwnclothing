import React from "react";
import {Route, Switch} from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";

import "./pages/homepage/homepage.styles.scss";

// Temporary
const HatsPage = (props) => (
  <div>
    {console.log(props)}
    <h1>Hats! Hats! Hats!</h1>
    <h1>{props.match.params.hatId}</h1>
  </div>
);
const JacketsPage = (props) => (
  <div>
    {console.log(props)}
    <h1>Jackets! Jackets! Jackets!</h1>
    <h1>{props.match.params.jacketId}</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop/hats" component={HatsPage} />
        <Route exact path="/shop/hats/:hatId" component={HatsPage} />
        <Route exact path="/shop/jackets" component={JacketsPage} />
      </Switch>
    </div>
  );
}

export default App;
