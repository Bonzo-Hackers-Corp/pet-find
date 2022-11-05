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

function App() {
  const [newPostOverlayVisible, setNewPostOverlayVisible] = useState(false);
<<<<<<< HEAD
  const modalVisible = useSelector((state) => state.user.modalOpen);
=======
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
>>>>>>> 72f0c56b476f65126a32c57819835368b0132b1e

  return (
    <div className={css.app}>
      <TopBar />
      <Map />
      {modalVisible && <Modal />}
      <CardList />
      <BottomBar
        onClickNew={() => setNewPostOverlayVisible(true)}
      />

<<<<<<< HEAD
      {/* <NewPostOverlay visible={newPostOverlayVisible}/> */}
=======
      <NewPostOverlay visible={newPostOverlayVisible} onCancel={() => setNewPostOverlayVisible(false)}/>
>>>>>>> 72f0c56b476f65126a32c57819835368b0132b1e
    </div>
  );
}

export default App;
