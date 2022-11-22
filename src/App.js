import React, { Component } from 'react'
import NavBar from './Components/NavBar'
import Hero from './Components/Hero'
/* import Banner from './Components/Banner';*/
import 'bootstrap/dist/css/bootstrap.min.css';
/* import Button from 'react-bootstrap/Button'; */ /* */
import Box from './Components/Box';
import './index.css';
import './App.css';


export class App extends Component {
  render() {
    return (
      <div>
 
        <NavBar />
        <Hero />
        <Box />
      </div>
    )
  }
}

export default App

