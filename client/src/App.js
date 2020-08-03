import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Zodiac from "./components/Zodiac";
import ZodiacCard from "./components/ZodiacCard";
import signs from "./signs";
import WelcomePage from "./components/WelcomePage";
import MusicPage from "./components/MusicPage";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signs: signs,
      zodiacDate: "",
    };
  }


  handleClick = (e) => {
    console.log(e);
    this.setState({
      signs: e.target.value,
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" exact component={WelcomePage} />
            <Route path="/horoscope" exact>
              <Zodiac
                signs={this.state.signs}
                onClick={this.handleClick}
                zodiacDate={this.state.zodiacDate}
              />
            </Route>
            <Route path="/horoscope/:sign" component={ZodiacCard} />
          </Switch>
          <Route path='/music' component={MusicPage} />
        </div>
      </BrowserRouter>
    );
  }
}
