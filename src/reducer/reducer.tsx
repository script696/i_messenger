// const initialState = { name: "", text: "" };
const initialState = {
  msgUniqueId: "32DF124asf",
  ownerId: "000000",
  name: "",
  text: "",
  timeSent: "15:55",
  filters: {
    isBold: false,
    isItalic: false,
    isUnderline: false,
    isNumList: false,
    isBulletsList: false,
  },
};

/* eslint-disable import/no-anonymous-default-export */
const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "fillName":
      console.log(action.payload.key);

      return { ...state, [action.payload.key]: action.payload.value };
    case "fillText":
      return { ...state, [action.payload.key]: action.payload.value };
    case "reset":
      return initialState;
    case "bold":
      // return { ...state, isBold: action.payload }; //Приходится делать вот так
      return {
        ...state,
        filters: { ...state.filters, isBold: action.payload },
      }; //Приходится делать вот так
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
      const isNumeric = action.payload.key === "numeric";

      if (!state.filters.isNumList) {
        const arrOfChunks = state.text.split("\n");
        const numberChunks = arrOfChunks.map(
          (val: any, index: any) =>
            `${isNumeric ? index + 1 + "." : "\u2022"} ${val}`
        );
        const newNumberListString = numberChunks.join("\n");
        return {
          ...state,
          text: newNumberListString,
          filters: { ...state.filters, isNumList: action.payload.value },
        };
      } else {
        const arrOfChunks = state.text.split("\n");
        const numberChunks = arrOfChunks.map((val: any) => isNumeric ? val.slice(3) : val.slice(2));
        const newNumberListString = numberChunks.join("\n");
        return {
          ...state,
          text: newNumberListString,
          filters: { ...state.filters, isNumList: action.payload.value },
        };
      }

    case "resetFilters":
      return {
        ...state,
        filters: { isBold: false, isItalic: false, isUnderline: false },
      };
    default:
      return state;
  }
};
export { reducer, initialState };
