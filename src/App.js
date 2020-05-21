import React from 'react';
import Main from './components/main/main.component'
import Header from './components/header/header.component'
import './App.css';
import {BrowserRouter} from "react-router-dom";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header/>
    <Main/>
    </BrowserRouter>
    </div>
  );
}

export default App;
