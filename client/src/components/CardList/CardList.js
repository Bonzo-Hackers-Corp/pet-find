import React from "react";
import Card from "../Card/Card";
import css from "./CardList.module.css";
import { useSelector } from "react-redux";

const CardList = () => {
  const postList = useSelector((state) => state.posts.posts);

  return (
    <div className={css.container}>
      {postList.map((item) => (
        <Card data={item}/>
      ))}
    </div>
  );
};

export default CardList;
