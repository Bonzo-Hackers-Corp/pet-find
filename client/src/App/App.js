import React from "react";
import css from "./App.module.css";
import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { fetchPosts } from "../redux/postsSlice";

// components
import { useSelector } from "react-redux";
import Modal from "../components/Modal/Modal";
import TopBar from "../components/TopBar/TopBar";
import Map from "../components/Map/Map";
import BottomBar from "../components/BottomBar/BottomBar";
import CardList from "../components/CardList/CardList";
import NewPostOverlay from "../components/NewPostOverlay/NewPostOverlay";
import ShelterList from "../components/ShelterList/ShelterList";

function App() {
  const [newPostOverlayVisible, setNewPostOverlayVisible] = useState(false);
  const modalVisible = useSelector((state) => state.user.modalOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className={css.app}>
      <TopBar />
      <Map />
      {modalVisible && <Modal />}
      <CardList />
      <BottomBar
        onClickNew={() => setNewPostOverlayVisible(true)}
      />

      <NewPostOverlay visible={newPostOverlayVisible} onCancel={() => setNewPostOverlayVisible(false)}/>

      {/* <ShelterList /> */}
    </div>
  );
}

export default App;
