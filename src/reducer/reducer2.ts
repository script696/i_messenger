import { Reducer } from "React";

interface IinitialData {
  isAnswerOpen: boolean;
  msgOwnerName: string;
  msgText: string;
}

interface Actions {
  type: string;
  payload?: {
    [key: string]: any;
  };
}

const initialState2 = {
  isAnswerOpen: false,
  msgOwnerName: "",
  msgText: "",
};

/* eslint-disable import/no-anonymous-default-export */
const reducer2: Reducer<IinitialData, Actions> = (
  state: IinitialData,
  action: Actions
) => {
  switch (action.type) {
    case "handleAnswer":
      return {
        ...state,
        isAnswerOpen: true,
        msgOwnerName: action.payload?.userName,
        msgText: action.payload?.textMsg,
      };
    case "reset":
      return {
        ...initialState2,
      };
    default:
      return state;
  }
};
export { reducer2, initialState2 };
