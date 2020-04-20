import React from "react";
import {Route, Switch} from "react-router-dom";

import "./App.css";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {auth} from "../src/firebase/firebase.utils";

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

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({currentUser: user});
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/shop/hats" component={HatsPage} />
          <Route exact path="/shop/hats/:hatId" component={HatsPage} />
          <Route exact path="/shop/jackets" component={JacketsPage} />
          <Route exact path="/signin" component={SignInAndSignUpPage} /> 
        </Switch>
      </div>
    );
  }
}

export default App;
