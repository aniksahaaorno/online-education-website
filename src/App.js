import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Course from './Components/Course/Course';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
        <div className="container">
          <Header></Header>
          <Course></Course>
        </div> 
  );
}

export default App;
