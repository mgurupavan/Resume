import React, { Component } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Link to="/personalinfo">Personal details </Link> |
        <Link to="/educationalinfo"> Educational Info </Link> |
        <Link to="/projectsdone"> Projects Done </Link> |
        <Link to="/technicalSkills"> Technical Skills</Link> |
        
      </BrowserRouter>
    );
  }
}
export default App;
