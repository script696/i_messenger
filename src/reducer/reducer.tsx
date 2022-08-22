// const initialState = { name: "", text: "" };
const initialState = {
  msgUniqueId: "32DF124asf",
  ownerId: "000000",
  name: "",
  text: [],
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
    case "list-num":
      const test = state.text.split("\n");
      console.log(test);
      return {
        ...state,
        filters: { ...state.filters, isNumList: action.payload },
      };
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

// case "bold":

//       const test = state.text.split('\n')
//       console.log(test);
//       return state;
