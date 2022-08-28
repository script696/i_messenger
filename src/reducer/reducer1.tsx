import { Reducer } from "React";
import { Actions } from "../types/types";
import {
  FILL_NAME,
  FILL_TEXT,
  RESET_FORM,
  FILTER_BOLD,
  FILTER_ITALIC,
  FILTER_UNDERLINE,
  FILTER_LIST_NUM,
  FILTER_LIST_BULLETS,
  RESET_FILTERS,
} from "../actions/actions";



interface IinitialData {
  msgUniqueId: string;
  ownerId: string;
  userName: string;
  textMsg: string;
  timeSent: string;
  filters: any;
}

const initialState1 = {
  msgUniqueId: "",
  ownerId: "",
  userName: "",
  textMsg: "",
  timeSent: "",
  filters: {
    isBold: false,
    isItalic: false,
    isUnderline: false,
    isNumList: false,
    isBulletsList: false,
  },
};

const DOT_UNICOD = "\u2022";

/* eslint-disable import/no-anonymous-default-export */
const reducer1: Reducer<IinitialData, Actions> = (state, action) => {
  const structureStringList = (initialString: string, isNumeric: boolean) => {
    const arrOfChunks = initialString.split("\n");
    const numberChunks = arrOfChunks.map(
      (val: any, index: any) =>
        `${isNumeric ? index + 1 + "." : DOT_UNICOD} ${val}`
    );
    const newString = numberChunks.join("\n");
    return newString;
  };

  const destructureStringList = (initialString: string, isNumeric: boolean) => {
    const arrOfChunks = initialString.split("\n");
    const numberChunks = arrOfChunks.map((val: any) =>
      isNumeric ? val.slice(3) : val.slice(2)
    );
    const newString = numberChunks.join("\n");
    return newString;
  };

  switch (action.type) {
    case FILL_NAME:
      return { ...state, [action.payload?.key]: action.payload?.value };
    case FILL_TEXT:
      return { ...state, [action.payload?.key]: action.payload?.value };
    case RESET_FORM:
      return initialState1;
    case FILTER_BOLD:
      return {
        ...state,
        filters: { ...state.filters, isBold: action.payload },
      };
    case FILTER_ITALIC:
      return {
        ...state,
        filters: { ...state.filters, isItalic: action.payload },
      };
    case FILTER_UNDERLINE:
      return {
        ...state,
        filters: { ...state.filters, isUnderline: action.payload },
      };
    case FILTER_LIST_NUM:
      if (!state.filters.isNumList) {
        const newString = structureStringList(state.textMsg, true);
        return {
          ...state,
          textMsg: newString,
          filters: { ...state.filters, isNumList: action.payload?.value },
        };
      } else {
        const newString = destructureStringList(state.textMsg, true);
        return {
          ...state,
          textMsg: newString,
          filters: { ...state.filters, isNumList: action.payload?.value },
        };
      }
    case FILTER_LIST_BULLETS:
      if (!state.filters.isBulletsList) {
        const newString = structureStringList(state.textMsg, false);
        return {
          ...state,
          textMsg: newString,
          filters: { ...state.filters, isBulletsList: action.payload?.value },
        };
      } else {
        const newString = destructureStringList(state.textMsg, false);
        return {
          ...state,
          textMsg: newString,
          filters: { ...state.filters, isBulletsList: action.payload?.value },
        };
      }
    case RESET_FILTERS:
      if (state.filters.isNumList || state.filters.isBulletsList) {
        if (state.filters.isNumList) {
          console.log(state.textMsg);
          const newString = destructureStringList(state.textMsg, true);
          console.log(newString);

          return {
            ...state,
            textMsg: newString,
            filters: {
              isBold: false,
              isItalic: false,
              isUnderline: false,
              isNumList: false,
              isBulletsList: false,
            },
          };
        }
        if (state.filters.isBulletsList) {
          const newString = destructureStringList(state.textMsg, true);
          return {
            ...state,
            textMsg: newString,
            filters: {
              isBold: false,
              isItalic: false,
              isUnderline: false,
              isNumList: false,
              isBulletsList: false,
            },
          };
        }
      }
      return {
        ...state,
        filters: {
          isBold: false,
          isItalic: false,
          isUnderline: false,
          isNumList: false,
          isBulletsList: false,
        },
      };
    default:
      return state;
  }
};

export { reducer1, initialState1 };
