import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ImageSlider from './components/imageGallery/imageSlider'
import Section1 from './components/pageLayout1'
import Breakout from './components/breakout'
import PageLayout2 from './components/pageLayout2'
import Footer from './components/Footer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className='header'>
        <img className="logo" src="https://pbs.twimg.com/profile_images/724827038448758785/Amu9M8J6_400x400.jpg"/>
        <h1 className='title'>Project Name</h1>
      </div>
        <ImageSlider />
        <Section1/>
        <Breakout/>
        <PageLayout2/>
        <Footer/>
      </div>
    );
  }
}

export default App;
