import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';

const App = () => {
  return (
    <div>
      <h1>Hello world</h1>
      <Row title="Netflix Originals" fetchURL={requests.fetchNetflix}/>
      <Row title="Treding Now" fetchURL={requests.fetchTrendingMovies} />
    </div>
  )
}

export default App

