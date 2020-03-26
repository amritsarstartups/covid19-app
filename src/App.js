import React from 'react';
import './App.css';
import {
  HashRouter as Router,
  Route,
} from "react-router-dom";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Route exact path="/">
          <SearchForm />
        </Route>
        <Route exact path="/results">
          <SearchResults />
        </Route>
      </Router>
    </div>
  );
}

export default App;
