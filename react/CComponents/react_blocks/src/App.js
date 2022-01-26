import React from 'react';
import './App.css';
import Header from './components/header';
import Navigation from './components/navigation';
import Main from './components/main';
// import Subcontents from './components/subcontents';
// import Advertisement from './components/advertisement';


function App() {
  return (
    <div className="app">
      <Header />
      <div className="flex">
        <Navigation />
        <Main />
      </div>
    </div>
  );
}

export default App;


