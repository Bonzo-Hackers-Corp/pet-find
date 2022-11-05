import React, { useEffect, useState } from "react";
import css from "./Modal.module.css";
import Image from "./dog.jpg";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setModalOpen } from "../../redux/userSlice.js";
import { TextField, Button } from '@mui/material';
import { getComments } from "../../api/getComments";
import { postComment } from '../../api/postComment';

const Click = (dispatch) => {
  dispatch(setModalOpen(false));
};

const Modal = () => {
  const postData = useSelector((state) => state.user.modalData);
  const name = useSelector(state => state.user.name);
  const surname = useSelector(state => state.user.surname);
  const dispatch = useDispatch();
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    const comments = await getComments(postData.id);
    setComments(comments);
  }

  useEffect(() => {
    fetchComments();
  }, []);

  useEffect(() => {
    console.log(comments);
  }, [comments]);

  const addComment = async () => {
    const json = {
      post_id: postData.id,
      author: `${name} ${surname}`,
      description: newComment
    }

    await postComment(json);
    fetchComments();
  }

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
          <div className={css.title}>{postData.title}</div>
          <div className={css.info}>{postData.description}</div>
          <div className={css.phone}>
            Numer telefonu: {postData.phone_number}
          </div>
        </div>

        <div className={css.commentSection}>
          <TextField id="standard-basic" label="Dodaj komentarz" variant="standard" multiline className={css.input} onChange={({target}) => setNewComment(target.value)}/>
          <Button variant="outlined" onClick={() => addComment()} className={css.saveButton}>Dodaj</Button>

          <div className={css.comments}>
            {comments.map((comment) => {
              return (
                <div className={css.comment}>
                  <p style={{fontWeight: 700}}>{comment.author}</p>
                  <p>{comment.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
