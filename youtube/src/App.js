import { Fragment } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Fragment>
      <Header />
      <Navbar />
      <Main />
    </Fragment>
  );
}

export default App;
