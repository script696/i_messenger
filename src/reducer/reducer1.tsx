import { Reducer } from "React";

interface IinitialData {
  msgUniqueId: string;
  ownerId: string;
  userName: string;
  textMsg: string;
  timeSent: string;
  filters: any;
}

interface Actions {
  type: string;
  payload?: {
    [key: string]: any;
  };
}

const initialState1 = {
  msgUniqueId: "",
  ownerId: "",
  userName: "",
  textMsg: "",
  timeSent: "15:55",
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

  const destructureStringList = (initialString: string) => {
    const arrOfChunks = initialString.split("\n");
    const numberChunks = arrOfChunks.map((val: any) => val.slice(2));
    const newString = numberChunks.join("\n");
    return newString;
  };

  switch (action.type) {
    case "fillName":

      return { ...state, [action.payload?.key]: action.payload?.value };
    case "fillText":
      return { ...state, [action.payload?.key]: action.payload?.value };
    case "reset":
      return initialState1;
    case "bold":
      return {
        ...state,
        filters: { ...state.filters, isBold: action.payload },
      };
    case "italic":
      return {
        ...state,
        filters: { ...state.filters, isItalic: action.payload },
      };
    case "underline":
      return {
        ...state,
        filters: { ...state.filters, isUnderline: action.payload },
      };
    case "list":
      
      if (!state.filters.isNumList) {

        const isNumeric = action.payload?.key === "numeric";

        const newString = structureStringList(state.textMsg, isNumeric);
        return {
          ...state,
          textMsg: newString,
          filters: { ...state.filters, isNumList: action.payload?.value },
        };
      } else {
        const newString = destructureStringList(state.textMsg);
        return {
          ...state,
          textMsg: newString,
          filters: { ...state.filters, isNumList: action.payload?.value },
        };
      }
    case "resetFilters":
      if (state.filters.isNumList || state.filters.isBulletsList) {
        const newString = destructureStringList(state.textMsg);
        return {
          ...state,
          text: newString,
          filters: {
            isBold: false,
            isItalic: false,
            isUnderline: false,
            isNumList: false,
            isBulletsList: false,
          },
        };
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
