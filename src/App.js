import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

import './App.css';

const FilmCamPage = () => (
  <div>
    <h1>FILM CAMERAS HERE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/filmcameras' component={FilmCamPage} />
      </Switch>
    </div>
  );
}

export default App;
