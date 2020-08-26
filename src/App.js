import React from 'react';
import Header from './components/Header';
import mockedData from './assets/data/fakedata.json'
import Gridpictures from './components/GridPictures';
import './App.css';



function App() {
  return (
    <div style={{backgroundColor: '#008b8b'}}>
      <Header/>
      <Gridpictures data={mockedData}/>
    </div>
  );
}

export default App;
