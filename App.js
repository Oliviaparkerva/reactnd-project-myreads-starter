//Imports: React,App.css, Route to use paths, mainpage & search page components from components folder
//Exports:BooksApp
//ReactRoute   exact path
//Component https://is.gd/hfKjeH

import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import MainPage from './Components/MainPage';
import SearchPage from './Components/SearchPage';

class BooksApp extends React.Component {
  render(){
    return(
      <div>
        <Route exact path="/" component={ MainPage }/>
        <Route exact path="/search" component={ SearchPage }/>
      </div>
    );
  }
}

export default BooksApp
