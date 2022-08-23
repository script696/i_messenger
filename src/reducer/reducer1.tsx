import { Reducer } from "React";
import {Actions} from '../types/types'


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

  const destructureStringList = (initialString: string, isNumeric: boolean) => {
    const arrOfChunks = initialString.split("\n");
    const numberChunks = arrOfChunks.map((val: any) => isNumeric ? val.slice(3) : val.slice(2));
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
   
    case "list-num":
      
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
    case "list-bullets":
      
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
    case "resetFilters":
      if (state.filters.isNumList || state.filters.isBulletsList) {
        if(state.filters.isNumList){
          
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
        if(state.filters.isBulletsList){
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
