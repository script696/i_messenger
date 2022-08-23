import React, { useContext } from "react";
import MessengesContext from "../../../../context/MessengesContext";
import s from "./MsgCard.module.scss";
import { ImsgFakeData, IuserFakeData } from "../../../../types/types";

interface IMsgCard {
  msgData: ImsgFakeData;
  userId: IuserFakeData;
}

const MsgCard = ({
  msgData: { ownerId, userName, textMsg, timeSent, filters },
  userId: { userId },
}: IMsgCard) => {
  const { dispatch2 } = useContext(MessengesContext);

  const isUserMsg = ownerId === userId;

  const msgCardClasses = [s.msgCard, !isUserMsg ? s.msgCard_style_bot : null];

  const texClasses = [
    s.msgCard__item,
    filters.isBold ? s.msgCard__item_bold : null,
    s.msgCard__item,
    filters.isItalic ? s.msgCard__item_italic : null,
    s.msgCard__item,
    filters.isUnderline ? s.msgCard__item_underline : null,
  ];

  return (
    <article className={msgCardClasses.join(" ")}>
      <div className={s.msgCard__logoWrapper}>
        <div className={s.msgCard__logo}></div>
      </div>
      <div className={s.msgCard__content}>
        <p className={s.msgCard__name}>{userName}</p>
        <p className={texClasses.join(" ")}>{textMsg}</p>
        <p className={s.msgCard__time}>{timeSent}</p>
      </div>
      <button
        className={s.msgCard__answerBtn}
        type="button"
        onClick={() => {
          dispatch2({ type: "handleAnswer", payload: { userName, textMsg } });
        }}
      >
        Ответить
      </button>
    </article>
  );
};

export default MsgCard;
