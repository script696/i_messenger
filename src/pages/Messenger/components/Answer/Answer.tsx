import React, { useContext } from "react";
import GlobalSvgSelector from "../../../../assets/icons/GlobalSvgSelector";
import MessengesContext from "../../../../context/MessengesContext";
import s from "./Answer.module.scss";

const Answer = () => {
  const { state, dispatch } = useContext(MessengesContext);

  return (
    <div className={s.answer}>
      <div className={s.answer__filterBar}>
        <ul className={s.answer__filterBar_left}>
          <li className={s.answer__filterBarItem}>
            <button
              className={s.answer__filterBtn}
              name="bold"
              onClick={() => dispatch({ type: "bold", payload: !state.filters.isBold })}
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
              className={s.answer__filterBtn}
              name="underline"
              onClick={() =>
                dispatch({ type: "underline", payload: !state.filters.isUnderline })
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
            className={s.answer__filterBtn} 
            name="list-num"
            onClick={() =>
            dispatch({ type: "number-list", payload: !state.filters.isNumList })
            }
            >
              <GlobalSvgSelector id="number-list" />
            </button>
          </li>
          <li className={s.answer__filterBarItem}>
            <button className={s.answer__filterBtn} name="list-bullets">
              <GlobalSvgSelector id="list-bullets" />
            </button>
          </li>
        </ul>
        <div className={s.answer__filterBar_rigth}>
          <button
            className={s.answer__filterBtn}
            name="replay"
            onClick={() => dispatch({ type: "resetFilters" })}
          >
            <GlobalSvgSelector
              id="replay"
            />
          </button>
        </div>
      </div>
      <div className={s.answer__content}>
        <p className={s.answer__title}>Ответ на сообщение:</p>
        <div className={s.answer__textWrapper}>
          <p className={s.answer__name}>Евгений</p>
          <p className={s.answer__text}>Хочу программировать!</p>
        </div>
      </div>
    </div>
  );
};

export default Answer;
