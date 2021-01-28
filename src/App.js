import React from "react";
import { Button } from '@material-ui/core';

import SearchInput from './components/SearchInput'

import './App.css';

function App() {

  function handleInputCallback(input) {
    console.log(input)
  }

  return (
    <div className="App">
      <SearchInput callback={handleInputCallback}/>
    </div>
  );
}

export default App;
