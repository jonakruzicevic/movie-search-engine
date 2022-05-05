import React from 'react'
import './App.css';

import SearchMovie from './components/SearchMovie';


function App() {
  return (
    <div className="App">
      <div className='container'>
        <h1 className='title'>Movie Search</h1>
        <SearchMovie />
      </div>
    </div>
  );
}

export default App;
