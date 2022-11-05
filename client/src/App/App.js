import React from "react";
import css from "./App.module.css";

// components
import Modal from "../components/Modal/Modal";
import TopBar from "../components/TopBar/TopBar";
import Map from "../components/Map/Map";
import BottomBar from "../components/BottomBar/BottomBar";
import CardList from "../components/CardList/CardList";

function App() {
  return (
    <div className={css.app}>
      <TopBar />
      <Map />
      {true && <Modal />}
      <CardList />
      <BottomBar />
    </div>
  );
}

export default App;
