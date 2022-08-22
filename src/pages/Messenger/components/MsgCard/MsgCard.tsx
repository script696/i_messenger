import React, { useEffect } from "react";
import s from "./MsgCard.module.scss";

interface IMsgCard {
  msgData: {
    ownerId: string;
    userName: string;
    textMsg: string;
    timeSent: string;
  };
  userId: [
    {
      _userId: string;
    }
  ];
}

const MsgCard = ({
  msgData: {
    ownerId,
    userName,
    textMsg,
    timeSent,
    filters,
    
  },
  userId,
}: any) => {
  const isUserMsg = ownerId === userId[0]._userId;


  const texClasses = [
    s.msgCard__item, filters.isBold ? s.msgCard__item_bold : null,
    s.msgCard__item, filters.isItalic ? s.msgCard__item_italic : null,
    s.msgCard__item, filters.isUnderline ? s.msgCard__item_underline : null,
  ];


useEffect(()=>{console.log(filters)},[filters])
  return (
    <article
      className={`${s.msgCard} ${!isUserMsg ? s.msgCard_style_bot : null} }`}
    >
      <div className={s.msgCard__logoWrapper}>
        <div className={s.msgCard__logo}></div>
      </div>
      <div className={s.msgCard__content}>
        <p className={s.msgCard__name}>{userName}</p>
        <p className={texClasses.join(" ")}>{textMsg}</p>
        {/* <ul className={s.msgCard__items}>
          {textMsg.map((msg: any) => (
            <li 
            key={Math.random()} 
            className={`${s.msgCard__item} ${filters.isBold ? s.msgCard__item_bold : null}`}>{msg}</li>
          ))}
        </ul> */}
        <p className={s.msgCard__time}>{timeSent}</p>
      </div>
    </article>
  );
};

export default MsgCard;
