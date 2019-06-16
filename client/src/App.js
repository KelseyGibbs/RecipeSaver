import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Search from  "./pages/Search/Search";
import Saved from  "./pages/Saved/Saved";
import Nav from "./components/Nav";


class App extends Component {
  render() {
    return (
      <Router>
        <Nav></Nav>
      <div>
        <ul>
          <li>
            <Link to="/">GoogleBooks</Link>
          </li>
          <li>
            <Link to="/Search">Search</Link>
          </li>
          <li>
            <Link to="/Saved">Saved</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Search} />
        <Route path="/saved" component={Saved} />
        <Route path="/search" component={Search} />
      </div>
    </Router>
    );
  }
}

export default App;