import { Fragment } from 'react';
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Navbar from './Navbar/Navbar';

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
