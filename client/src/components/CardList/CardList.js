import React from "react";
import Card from "../Card/Card";
import css from "./CardList.module.css";
import { useSelector } from "react-redux";

const CardList = () => {
  const postList = useSelector((state) => state.user.postList);

  return (
    <div className={css.container}>
      <Card
        title="Zaginął pies!!!"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis incidunt cupiditate consequatur optio rem necessitatibus quisquam dolor doloribus natus facilis!"
      />
      <Card
        title="Zaginął pies!!!"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis incidunt cupiditate consequatur optio rem necessitatibus quisquam dolor doloribus natus facilis!"
      />
      <Card
        title="Zaginął pies!!!"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis incidunt cupiditate consequatur optio rem necessitatibus quisquam dolor doloribus natus facilis!"
      />
      <Card
        title="Zaginął pies!!!"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis incidunt cupiditate consequatur optio rem necessitatibus quisquam dolor doloribus natus facilis!"
      />
      <Card
        title="Zaginął pies!!!"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis incidunt cupiditate consequatur optio rem necessitatibus quisquam dolor doloribus natus facilis!"
      />
    </div>
  );
};

export default CardList;
