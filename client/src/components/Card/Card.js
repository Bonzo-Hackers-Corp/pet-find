import React from "react";
import css from "./Card.module.css";
import Image from "./dog.jpg";

const Card = (props) => {
  return (
    <button>
      <div className={css.container}>
        <div className={css.test}>
          <img className={css.image} src={Image} alt="dog" />
        </div>
        <div className={css.description}>
          <div className={css.title}>{props.title}</div>
          <div className={css.info}>{props.description}</div>
        </div>
      </div>
    </button>
  );
};

export default Card;
