import React from 'react';
import './App.css';

import NavBar from './components/navbar/navBar'
import Banner from './components/banner/Banner'
import Row from './components/row/Row'

import requests from './request'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Row title='Trending now' fetchUrl={requests.fetchTrending} />
      <Row title='Netflix originals' fetchUrl={requests.fetchNetflixOriginals} />
      <Row title='Top rated' fetchUrl={requests.fetchTopRated} />
      <Row title='Comedy' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Action' fetchUrl={requests.fetchActionMovies} />
      <Row title='Romance' fetchUrl={requests.fetchRomanceMovies} />
    </div>
  );
}

export default App;
