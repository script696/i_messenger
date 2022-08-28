import { IPayload } from "../types/types";


const FILL_NAME = "FILL_NAME";
const FILL_TEXT = "FILL_TEXT";
const RESET_FORM = "RESET_FORM";
const FILTER_BOLD = "FILTER_BOLD";
const FILTER_ITALIC = "FILTER_ITALIC";
const FILTER_UNDERLINE = "FILTER_UNDERLINE";
const FILTER_LIST_NUM = "FILTER_LIST_NUM";
const FILTER_LIST_BULLETS = "FILTER_LIST_BULLETS";
const RESET_FILTERS = "RESET_FILTERS";
const HANDLE_ANSWER = "HANDLE_ANSWER";
const RESET_ANSWER = "RESET_ANSWER";

const fillName = (payload: IPayload<string>) => {
  return { type: FILL_NAME, payload: payload };
};

const fillText = (payload: IPayload<string>) => {
  return { type: FILL_TEXT, payload: payload };
};
const resetForm = () => {
  return { type: RESET_FORM };
};

const filterBold = (payload: boolean) => {
  return { type: FILTER_BOLD, payload: payload };
};
const filterItalic = (payload: boolean) => {
  return { type: FILTER_ITALIC, payload: payload };
};
const filterUnderline = (payload: boolean) => {
  return { type: FILTER_UNDERLINE, payload: payload };
};

const filterListNum = (payload: IPayload<boolean>) => {
  return { type: FILTER_LIST_NUM, payload: payload };
};
const filterListBullets = (payload:  IPayload<boolean>) => {
  return { type: FILTER_LIST_BULLETS, payload: payload };
};

const resetFilters = () => {
  return { type: RESET_FILTERS};
};

const handleAnswer = (payload: IPayload<string>) => {
  return { type: HANDLE_ANSWER, payload: payload};
};

const resetAnswer = () => {
  return { type: RESET_ANSWER };
};


export {
  FILL_NAME,
  FILL_TEXT,
  RESET_FORM,
  FILTER_BOLD,
  FILTER_ITALIC,
  FILTER_UNDERLINE,
  FILTER_LIST_NUM,
  FILTER_LIST_BULLETS,
  RESET_FILTERS,
  HANDLE_ANSWER,
  RESET_ANSWER,
  fillName,
  fillText,
  resetForm,
  filterBold,
  filterItalic,
  filterUnderline,
  filterListNum,
  filterListBullets,
  resetFilters,
  handleAnswer,
  resetAnswer,
};
