import React from "react";
import css from "./Modal.module.css";
import Image from "./dog.jpg";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setModalOpen } from "../../redux/userSlice.js";

const Click = (dispatch) => {
  dispatch(setModalOpen(false));
};

const Modal = () => {
  const postData = useSelector((state) => state.user.modalData);
  const dispatch = useDispatch();
  return (
    <div className={css.background}>
      <div className={css.modal}>
        {" "}
        <button className={css.close} onClick={() => Click(dispatch)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
          </svg>
        </button>
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
