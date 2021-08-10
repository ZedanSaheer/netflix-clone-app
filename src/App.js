import React from 'react';
import './App.css';
import Row from './Row';
import requests from './Requests';
import Banner from './Banner';

const App = () => {
  return (
    <div>
      <h1>Hello world</h1>
      <Row title="Netflix Originals" fetchURL={requests.fetchNetflix} isLargerRow/>
      <Row title="Treding Now" fetchURL={requests.fetchTrendingMovies} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRatedMovies} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Documentary Movies" fetchURL={requests.fetchDocumentaryMovies} />
    </div>
  )
}

export default App

