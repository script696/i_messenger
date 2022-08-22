import React from "react";
import s from "./MsgCard.module.scss";

interface IMsgCard {
  msgData: {
    ownerId: string;
    userName: string;
    textMsg: string;
    timeSent: string;
  },
  userId : [
    {
      _userId: string;
    }
  ]
}

const MsgCard = ({
  msgData: { ownerId, userName, textMsg, timeSent, }, userId
}: any) => {


  const isUserMsg = ownerId === userId[0]._userId
  
  return (
    <article className={`${s.msgCard} ${!isUserMsg ? s.msgCard_style_bot : null} }`}>
      <div className={s.msgCard__logoWrapper}>
        <div className={s.msgCard__logo}></div>
      </div>
      <div className={s.msgCard__content}>
        <p className={s.msgCard__name}>{userName}</p>
        <p className={s.msgCard__text}>{textMsg}</p>
        <p className={s.msgCard__time}>{timeSent}</p>
      </div>
    </article>
  );
};

export default MsgCard;
