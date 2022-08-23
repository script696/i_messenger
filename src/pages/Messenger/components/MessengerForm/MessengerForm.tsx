import React, { FormEvent, useContext, } from "react";
import s from "./MessengerForm.module.scss";
import MessengesContext from "../../../../context/MessengesContext";


interface IMessengerForm {
  onSubmit: (userName: string, textMsg: string)=> void
}

const MessengerForm = ({ onSubmit }: IMessengerForm) => {

  const {state1, dispatch1} = useContext(MessengesContext)

  const textareaClasses = [
    s.msgForm__textArea,
    state1.filters.isBold ? s.msgForm__textArea_style_bold : null,
    state1.filters.isItalic ? s.msgForm__textArea_style_italic : null,
    state1.filters.isUnderline ? s.msgForm__textArea_style_underline : null,
  ]


  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const { userName, textMsg } = state1;

    onSubmit(userName, textMsg,);
  };
 

  return (
    <form className={s.msgForm} onSubmit={handleSubmit}>
      <input
        value={state1.userName}
        id="msgOwnerName"
        className={s.msgForm__input}
        type="text"
        placeholder="Имя"
        onChange={(e) =>
          dispatch1({
            type: "fillName",
            payload: { key: "userName", value: e.target.value },
          })
        }
      />
      <textarea
        value={state1.textMsg}
        id="msgText"
        className={textareaClasses.join(' ')}
        placeholder="Сообщение"
        onChange={(e) =>
          dispatch1({
            type: "fillText",
            payload: { key: "textMsg", value: e.target.value },
          })
        }
      />
      <button className={s.msgForm__submitBtn} type="submit"></button>
    </form>
  );
};

export default MessengerForm;
