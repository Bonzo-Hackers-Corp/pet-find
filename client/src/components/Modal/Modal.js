import React from "react";
import css from "./Modal.module.css";
import Image from "./dog.jpg";

const Modal = () => {
  return (
    <div className={css.background}>
      <div className={css.modal}>
        {" "}
        <img className={css.image} src={Image} alt="dog" />
        <div className={css.description}>
          <div className={css.title}>Zaginął pies!!!!!</div>
          <div className={css.info}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
            voluptatum dignissimos a tempore quaerat nostrum consequatur nisi
            quas in praesentium.
          </div>
          <div className={css.phone}>Numer telefonu: 123456789</div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
