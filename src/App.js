import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import Rou from './config/Rou';
import React, { useState, useEffect, useRef } from "react";

function App() {
  useEffect(() => {
    return () => {
    };

  }, []);

  return (
    <BrowserRouter>
      <Rou />
    </BrowserRouter>
  )
}

export default App;
