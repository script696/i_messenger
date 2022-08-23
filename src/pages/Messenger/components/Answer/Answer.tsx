import GlobalSvgSelector from "../../../../assets/icons/GlobalSvgSelector";
import React, { useContext } from "react";
import MessengesContext from "../../../../context/MessengesContext";
import s from "./Answer.module.scss";



const Answer = () => {
  const { state1, dispatch1, state2, } = useContext(MessengesContext);

  const answerContentClasses = [
    s.answer__content,
    state2.isAnswerOpen ? s.answer__content_open : null,
  ];


  return (
    <div className={s.answer}>
      <div className={s.answer__filterBar}>
        <ul className={s.answer__filterBar_left}>
          <li className={s.answer__filterBarItem}>
            <button
              className={s.answer__filterBtn}
              name="bold"
              onClick={() =>
                dispatch1({ type: "bold", payload: !state1.filters.isBold })
              }
            >
              <GlobalSvgSelector
                id="bold"
                fill={`${state1.filters.isBold ? "#000" : ""}`}
              />
            </button>
          </li>
          <li className={s.answer__filterBarItem}>
            <button
              className={s.answer__filterBtn}
              name="italic"
              onClick={() =>
                dispatch1({ type: "italic", payload: !state1.filters.isItalic })
              }
            >
              <GlobalSvgSelector
                id="italic"
                fill={`${state1.filters.isItalic ? "#000" : ""}`}
              />
            </button>
          </li>
          <li className={s.answer__filterBarItem}>
            <button
              type="button"
              className={s.answer__filterBtn}
              name="underline"
              onClick={() =>
                dispatch1({
                  type: "underline",
                  payload: !state1.filters.isUnderline,
                })
              }
            >
              <GlobalSvgSelector
                id="underline"
                fill={`${state1.filters.isUnderline ? "#000" : ""}`}
              />
            </button>
          </li>
          <li className={s.answer__filterBarItem}>
            <button
              type="button"
              className={s.answer__filterBtn}
              name="list-num"
              onClick={() =>
                dispatch1({
                  type: "list",
                  payload: { key: "numeric", value: !state1.filters.isNumList },
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
                dispatch1({
                  type: "list",
                  payload: { key: "bullets", value: !state1.filters.isNumList },
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
            onClick={() => {
              dispatch1({ type: "resetFilters" });
            }}
          >
            <GlobalSvgSelector id="replay" />
          </button>
        </div>
      </div>
      <div className={answerContentClasses.join(" ")}>
        <p className={s.answer__title}>Ответ на сообщение:</p>
        <div className={s.answer__textWrapper}>
          <p className={s.answer__name}>{state2.msgOwnerName}</p>
          <p className={s.answer__text}>{state2.msgText}</p>
        </div>
      </div>
    </div>
  );
};

export default Answer;
