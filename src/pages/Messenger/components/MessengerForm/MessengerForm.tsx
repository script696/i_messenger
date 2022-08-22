import React from "react";
import s from "./MessengerForm.module.scss";

const MessengerForm = () => {
  return (
      <form className={s.msgForm}>
        <input
          id="msg-owner"
          className={s.msgForm__input}
          type="text"
          placeholder="Имя"
        />
        <textarea
          id="msg-text"
          className={s.msgForm__textArea}
          placeholder="Сообщение"
        />
        <button className={s.msgForm__submitBtn} type="submit"></button>
      </form>
  );
};

export default MessengerForm;
