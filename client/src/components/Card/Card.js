import React, { useState } from "react";
import css from "./Card.module.css";
import Image from "./dog.jpg";
import { useDispatch } from "react-redux";
import { setModalData, setModalOpen } from "../../redux/userSlice.js";
import { setMapPosition } from "../../redux/postsSlice";

const Card = (props) => {
  const dispatch = useDispatch();
  const [presses, setPresses] = useState(0);

  const cardClick = () => {
    if (presses === 0) {
      dispatch(setMapPosition({
        lat: parseFloat(props.data.location.latitude), 
        lng: parseFloat(props.data.location.longtitude)
      }));
      setPresses(1);
      setTimeout(() => {setPresses(0)}, 1000);
      return;
    }

    if (presses === 1) {
      dispatch(setModalData(props.data));
      dispatch(setModalOpen(true));
      return;
    }

    setPresses(0);
  };
  
  return (
    <div className={css.container}>
      <div className={css.button} onClick={() => cardClick(props, dispatch)}>
        <div className={css.test}>
          <img className={css.image} src={props.data.photo !== null ? props.data.photo : Image} alt="dog" />
        </div>
        <div className={css.description}>
          <div className={css.title}>{props.data.title}</div>
          <div className={css.info}>{props.data.description}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
