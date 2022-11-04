import React from 'react';
import css from './App.module.css';

// components
import TopBar from '../components/TopBar/TopBar';
import Map from '../components/Map/Map';
import BottomBar from '../components/BottomBar/BottomBar';

function App() {
  return (
    <div className={css.app}>
      <TopBar />
      <Map />
      <BottomBar />
    </div>
  );
}

export default App;