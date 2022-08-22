import React from "react";
import GlobalSvgSelector from "../../../../assets/icons/GlobalSvgSelector";
import s from "./Answer.module.scss";

const Answer = () => {
  return (
    <div className={s.answer}>
      <div className={s.answer__filterBar}>
        <ul className={s.answer__filterBar_left}>
          <li className={s.answer__filterBarItem}>
            <button className={s.answer__filterBtn}>
              <GlobalSvgSelector id="bold" />
            </button>
          </li>
          <li className={s.answer__filterBarItem}>
            <button className={s.answer__filterBtn}>
              <GlobalSvgSelector id="italic" />
            </button>
          </li>
          <li className={s.answer__filterBarItem}>
            <button className={s.answer__filterBtn}>
              <GlobalSvgSelector id="underline" />
            </button>
          </li>
          <li className={s.answer__filterBarItem}>
            <button className={s.answer__filterBtn}>
              <GlobalSvgSelector id="number-list" />
            </button>
          </li>
          <li className={s.answer__filterBarItem}>
            <button className={s.answer__filterBtn}>
              <GlobalSvgSelector id="list-bullets" />
            </button>
          </li>
        </ul>
        <div className={s.answer__filterBar_rigth}>
          <button className={s.answer__filterBtn}>
            <GlobalSvgSelector id="replay" />
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
