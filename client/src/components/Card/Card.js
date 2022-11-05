import React from "react";
import css from "./Card.module.css";
import Image from "./dog.jpg";
import { useDispatch } from "react-redux";
import { setModalData, setModalOpen } from "../../redux/userSlice.js";

const cardClick = (props, dispatch) => {
  dispatch(setModalData(props));
  dispatch(setModalOpen(true));
};

const Card = (props) => {
  const dispatch = useDispatch();
  return (
    <div className={css.container}>
      <div className={css.button} onClick={() => cardClick(props, dispatch)}>
        <div className={css.test}>
          <img className={css.image} src={Image} alt="dog" />
        </div>
        <div className={css.description}>
          <div className={css.title}>{props.title}</div>
          <div className={css.info}>{props.description}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
