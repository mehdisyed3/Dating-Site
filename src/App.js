import React from 'react'
import './App.css';
import Cards from './Cards/Cards';
import Header from './Header/Header'
import SwipeButtons from './SwipeButtons/SwipeButtons';


//1:23:18 
function App() {
  return (
    <div className="app">

      <Header />
      <Cards />
      <SwipeButtons />

    </div>
  );
}

export default App;
