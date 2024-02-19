import React from 'react';
import logo from './logo.svg';
import './App.css';
import Labs from "./labs";
import HelloWorld from './labs/a3/HelloWorld';
import Kanbas from './kanbas';
import {HashRouter} from "react-router-dom";
import { Routes, Route, Navigate } from 'react-router-dom';
import PathParameters from './labs/a3/routing/pathparameters';
  function App() {
    return (
      <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/Labs"/>}/>
          <Route path='/Labs/*' element={<Labs/> }></Route>
          <Route path='/Kanbas/*' element={<Kanbas/>}></Route>
          <Route path='/hellobro/*' element={<HelloWorld/>}></Route>
          <Route path='/pathparameters/*' element={<PathParameters/>}></Route>
        </Routes>
      </div>
      </HashRouter>
      
      
        
    );
 }

 export default App;

