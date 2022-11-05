import React from "react";
import css from "./App.module.css";
import { useState } from "react";

// components
import { useSelector } from "react-redux";
import Modal from "../components/Modal/Modal";
import TopBar from "../components/TopBar/TopBar";
import Map from "../components/Map/Map";
import BottomBar from "../components/BottomBar/BottomBar";
import CardList from "../components/CardList/CardList";
import NewPostOverlay from "../components/NewPostOverlay/NewPostOverlay";

function App() {
  const [newPostOverlayVisible, setNewPostOverlayVisible] = useState(false);
  const modalVisible = useSelector((state) => state.user.modalOpen);

  return (
    <div className={css.app}>
      <TopBar />
      <Map />
      {modalVisible && <Modal />}
      <CardList />
      <BottomBar
        onClickNew={() => setNewPostOverlayVisible(true)}
        onNewCancel={() => setNewPostOverlayVisible(false)}
      />

      {/* <NewPostOverlay visible={newPostOverlayVisible}/> */}
    </div>
  );
}

export default App;
