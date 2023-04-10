import './../global.css';
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Navbar from './Navbar/Navbar';
import React from "react";

function App() {
  return (
    <div className="app yt">
      <Header />
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
