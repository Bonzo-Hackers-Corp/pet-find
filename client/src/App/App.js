import React from "react";
import css from "./App.module.css";
import { useState } from "react";

// components
import TopBar from "../components/TopBar/TopBar";
import Map from "../components/Map/Map";
import BottomBar from "../components/BottomBar/BottomBar";
import CardList from "../components/CardList/CardList";
import NewPostOverlay from "../components/NewPostOverlay/NewPostOverlay";

function App() {
  const [newPostOverlayVisible, setNewPostOverlayVisible] = useState(false);

  return (
    <div className={css.app}>
      <TopBar />
      <Map />
      <CardList />
      <BottomBar 
        onClickNew={() => setNewPostOverlayVisible(true)}
        onNewCancel={() => setNewPostOverlayVisible(false)}
      />

      <NewPostOverlay visible={newPostOverlayVisible}/>
    </div>
  );
}

export default App;
