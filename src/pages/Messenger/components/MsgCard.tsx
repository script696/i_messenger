import React from "react";
import s from "./MsgCard.module.scss";

interface IMsgCard {
  _userId: string,
  userName: string,
  textMsg: string,
  timeSent: string,
}


const MsgCard = () => {
  return (
    <article className={`${s.msgCard}`}>
      <div className={s.msgCard__logoWrapper}>
        <div className={`${s.msgCard__logo}`}></div>
      </div>
      <div className={`${s.msgCard__content}`}>
        <p className={s.msgCard__name}>Евгений</p>
        <p className={s.msgCard__text}>Хочу программировать!</p>
        <p className={s.msgCard__time}>15:55</p>
      </div>
    </article>
  );
};

export default MsgCard;
