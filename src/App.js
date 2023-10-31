import './App.css';
import './index.css'
import {Route, Routes} from "react-router-dom"
import {useState} from 'react';
import Navbar from "./Navbar";
import Home from "./Home";
import Portfolio from './Portfolio';


const App = () => {
  return (
    <span data-theme ="pastel">
    <div className="App">
        <Navbar / >
        <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/portfolio" element = {<Portfolio/>}/>
        </Routes>
    </div>
    </span>
);
}

export default App;
