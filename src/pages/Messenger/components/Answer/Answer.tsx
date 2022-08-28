import GlobalSvgSelector from "../../../../assets/icons/GlobalSvgSelector";
import React, { useContext } from "react";
import MessengesContext from "../../../../context/MessengesContext";
import s from "./Answer.module.scss";
import {
  filterBold,
  filterItalic,
  filterListBullets,
  filterListNum,
  filterUnderline,
  resetFilters,
} from "../../../../actions/actions";

const Answer = () => {
  const { state1, dispatch1, state2 } = useContext(MessengesContext);

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
              onClick={(): void =>
                dispatch1(filterBold(!state1.filters.isBold))
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
              onClick={(): void =>
                dispatch1(filterItalic(!state1.filters.isItalic))
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
              onClick={(): void =>
                dispatch1(filterUnderline(!state1.filters.isUnderline))
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
              onClick={(): void =>
                dispatch1(
                  filterListNum({
                    key: "numeric",
                    value: !state1.filters.isNumList,
                  })
                )
              }
            >
              <GlobalSvgSelector
                id="number-list"
                fill={`${state1.filters.isNumList ? "#000" : ""}`}
              />
            </button>
          </li>
          <li className={s.answer__filterBarItem}>
            <button
              type="button"
              className={s.answer__filterBtn}
              onClick={(): void =>
                dispatch1(
                  filterListBullets({
                    key: "bullets",
                    value: !state1.filters.isBulletsList,
                  })
                )
              }
            >
              <GlobalSvgSelector
                id="list-bullets"
                fill={`${state1.filters.isBulletsList ? "#000" : ""}`}
              />
            </button>
          </li>
        </ul>
        <div className={s.answer__filterBar_rigth}>
          <button
            type="button"
            className={s.answer__filterBtn}
            name="replay"
            onClick={() => {
              dispatch1(resetFilters());
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
