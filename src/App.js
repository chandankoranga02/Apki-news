import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import NewsLetter from './Components/NewsLetter';
import { Routes, Route } from "react-router-dom";
import AboutUS from './Components/AboutUS';



export default class App extends Component {

  constructor() {
    super();
    this.state = {
      mode: "light"
    }
  }


  toggleButton = () => {
    if (this.state.mode === "light") {
      document.body.style.backgroundColor = "black"
      this.setState({mode : "dark"})
    }

    else {
      document.body.style.backgroundColor = "white"
      this.setState({mode : "light"})
    }
  }



  render() {

     let ps = 12;


    return (
      <div>

        <Navbar  button={this.toggleButton} mode={this.state.mode} />
        <Routes>

          <Route index path="/" element={<NewsLetter mode={this.state.mode} key="home" pagesize={ps} category="general" NewsCategory="Home" />} />
          <Route path="/ApkiNews" element={<NewsLetter mode={this.state.mode} key="ApkiNews" pagesize={ps} category="general" NewsCategory="ApkiNews" />} />

          <Route path="/sports" element={<NewsLetter mode={this.state.mode} key="sports" pagesize={ps} category="sports" NewsCategory="Sports" />} />
          <Route path="/technology" element={<NewsLetter mode={this.state.mode} key="technology" pagesize={ps} category="technology" NewsCategory="Technology" />} />
          <Route path="/business" element={<NewsLetter mode={this.state.mode} key="business" pagesize={ps} category="business" NewsCategory="Business" />} />
          <Route path="/general" element={<NewsLetter mode={this.state.mode} key="general" pagesize={ps} category="general" NewsCategory="General" />} />
          <Route path="/health" element={<NewsLetter mode={this.state.mode} key="health" pagesize={ps} category="health" NewsCategory="Health" />} />
          <Route path="/science" element={<NewsLetter mode={this.state.mode} key="science" pagesize={ps} category="science" NewsCategory="Science" />} />
          <Route path="/entertainment" element={<NewsLetter mode={this.state.mode}r key="entertainment" pagesize={ps} category="entertainment" NewsCategory="Entertainment" />} />
          <Route path="/about" element={<AboutUS mode={this.state.mode} />} />

        </Routes>


      </div>
    )
  }
}
