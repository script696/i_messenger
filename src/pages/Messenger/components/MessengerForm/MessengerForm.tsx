import React, { useContext, useEffect,} from "react";
import s from "./MessengerForm.module.scss";
import MessengesContext from "../../../../context/MessengesContext";

const MessengerForm = ({ onSubmit }: any) => {

  const {state, dispatch} = useContext(MessengesContext)

  const textareaClasses = [
    s.msgForm__textArea,
    state.filters.isBold ? s.msgForm__textArea_style_bold : null,
    state.filters.isItalic ? s.msgForm__textArea_style_italic : null,
    state.filters.isUnderline ? s.msgForm__textArea_style_underline : null,
  ]


  const handleSubmit = (e: any) => {
    e.preventDefault();

    const { name, text } = state;

    onSubmit(name, text,);
  };
 

  return (
    <form className={s.msgForm} onSubmit={handleSubmit}>
      <input
        value={state.name}
        id="msgOwnerName"
        className={s.msgForm__input}
        type="text"
        placeholder="Имя"
        onChange={(e) =>
          dispatch({
            type: "fillName",
            payload: { key: "name", value: e.target.value },
          })
        }
      />
      <textarea
        value={state.text}
        id="msgText"
        className={textareaClasses.join(' ')}
        // className={s.msgForm__textArea}
        placeholder="Сообщение"
        onChange={(e) =>
          dispatch({
            type: "fillText",
            payload: { key: "text", value: e.target.value },
          })
        }
      />
      <button className={s.msgForm__submitBtn} type="submit"></button>
    </form>
  );
};

export default MessengerForm;
