import React from "react";
import css from "./Card.module.css";
import Image from "./dog.jpg";

const Card = (props) => {
  return (
    <div className={css.container}>
      <img className={css.image} src={Image} alt="dog" />
      <div className={css.description}>
        <div className={css.title}>{props.title}</div>
        <div className={css.info}>{props.description}</div>
      </div>
    </div>
  );
};

export default Card;
