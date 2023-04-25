import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import StepOne from '../Steps/StepOne';
import StepTwo from '../Steps/StepTwo';
import StepThree from '../Steps/StepThree';
import StepFour from '../Steps/StepFour';
import Review from '../Steps/Review';

function App() {

  return (
    <div className='App'>
      <Router>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
        <Route exact path='/'>
          <StepOne />
        </Route>
        <Route exact path='/steptwo'>
          <StepTwo />
        </Route>
        <Route exact path='/stepthree'>
          <StepThree />
        </Route>
        <Route exact path='/stepfour'>
          <StepFour />
        </Route>
        <Route exact path='/review'>
          <Review />
        </Route>
      </Router>
    </div>
  );
}

export default App;
