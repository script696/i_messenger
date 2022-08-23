import React, { useContext } from "react";
import GlobalSvgSelector from "../../../../assets/icons/GlobalSvgSelector";
import MessengesContext from "../../../../context/MessengesContext";
import s from "./Answer.module.scss";

interface IisAnswerOpen {
  isAnswerOpen: boolean;
  answerMsgData: {
    name: string;
    text: string;
  };
}

const Answer = ({ isAnswerOpen, answerMsgData: {name, text} }: IisAnswerOpen) => {
  const { state, dispatch } = useContext(MessengesContext);

const answerContentClasses = [
  s.answer__content,
  isAnswerOpen ? s.answer__content_open : null,
]

  return (
    <div className={s.answer}>
      <div className={s.answer__filterBar}>
        <ul className={s.answer__filterBar_left}>
          <li className={s.answer__filterBarItem}>
            <button
              className={s.answer__filterBtn}
              name="bold"
              onClick={() =>
                dispatch({ type: "bold", payload: !state.filters.isBold })
              }
            >
              <GlobalSvgSelector
                id="bold"
                fill={`${state.filters.isBold ? "#000" : ""}`}
              />
            </button>
          </li>
          <li className={s.answer__filterBarItem}>
            <button
              className={s.answer__filterBtn}
              name="italic"
              onClick={() =>
                dispatch({ type: "italic", payload: !state.filters.isItalic })
              }
            >
              <GlobalSvgSelector
                id="italic"
                fill={`${state.filters.isItalic ? "#000" : ""}`}
              />
            </button>
          </li>
          <li className={s.answer__filterBarItem}>
            <button
              type="button"
              className={s.answer__filterBtn}
              name="underline"
              onClick={() =>
                dispatch({
                  type: "underline",
                  payload: !state.filters.isUnderline,
                })
              }
            >
              <GlobalSvgSelector
                id="underline"
                fill={`${state.filters.isUnderline ? "#000" : ""}`}
              />
            </button>
          </li>
          <li className={s.answer__filterBarItem}>
            <button
              type="button"
              className={s.answer__filterBtn}
              name="list-num"
              onClick={() =>
                dispatch({
                  type: "list",
                  payload: { key: "numeric", value: !state.filters.isNumList },
                })
              }
            >
              <GlobalSvgSelector id="number-list" />
            </button>
          </li>
          <li className={s.answer__filterBarItem}>
            <button
              type="button"
              className={s.answer__filterBtn}
              name="list-bullets"
              onClick={() =>
                dispatch({
                  type: "list",
                  payload: { key: "bullets", value: !state.filters.isNumList },
                })
              }
            >
              <GlobalSvgSelector id="list-bullets" />
            </button>
          </li>
        </ul>
        <div className={s.answer__filterBar_rigth}>
          <button
            type="button"
            className={s.answer__filterBtn}
            name="replay"
            onClick={() => dispatch({ type: "resetFilters" })}
          >
            <GlobalSvgSelector id="replay" />
          </button>
        </div>
      </div>
      <div className={answerContentClasses.join(' ')}>
        <p className={s.answer__title}>Ответ на сообщение:</p>
        <div className={s.answer__textWrapper}>
          <p className={s.answer__name}>{name}</p>
          <p className={s.answer__text}>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Answer;
