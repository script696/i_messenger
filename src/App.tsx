import React, { useEffect, useReducer, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Bell from "./pages/Bell/Bell";
import Messenger from "./pages/Messenger/Messenger";
import Operator from "./pages/Operator/Operator";
import Question from "./pages/Question/Question";
import Phone from "./shared/Phone/Phone";
import MessengesContext from "./context/MessengesContext";
import { reducer, initialState } from "./reducer/reducer";
import { getMsgData, getUserData, sendMsg } from "./utils/fakeApi";
import "./styles/index.scss";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  interface IfakeData {
    msgUniqueId: string;
    ownerId: string;
    userName: string;
    textMsg: string;
    timeSent: string;
  }
  interface IfakeData2 {
    _userId: string;
  }

  const [msgData, setMsgData] = useState<Array<IfakeData>>();
  const [userData, setUsergData] = useState<Array<IfakeData2>>();

  useEffect(() => {
    const response = async () => {
      const [msgDataRes, userDataRes] = await Promise.all([
        getMsgData(),
        getUserData(),
      ]);

      setMsgData((): Array<IfakeData> => [...msgDataRes]);
      setUsergData((prev): any => [...userDataRes]);
    };
    response();
  }, []);

// useEffect(()=> {console.log(state.filters)}, [state])

  const onSendMsg = (msgName: any, msgText: any): void => {
    const response = async () => {
      try {
        const res: any = await sendMsg(
          state.name,
          state.text,
          state.filters.isBold,
          state.filters.isItalic,
          state.filters.isUnderline,
          state.filters.isNumList,
          state.filters.isBulletsList,
        );
        setMsgData((): Array<IfakeData> => [...res]);
      } catch (e) {
        console.log(e);
      } finally {
        dispatch({
          type: "reset",
        });
      }
    };
    response();
  };


  return (
    <MessengesContext.Provider value={{ state, dispatch }}>
      <div className="container">
        <Phone>
          <Switch>
            <Route path="/messenger" exact>
              <Messenger
                msgData={msgData}
                userData={userData}
                onSendMsg={onSendMsg}
              />
            </Route>
            <Route path="/question" exact component={Question} />
            <Route path="/bell" exact component={Bell} />
            <Route path="/operator" exact component={Operator} />
            <Route path="/" exact>
              <Redirect to="/messenger" />
            </Route>
          </Switch>
        </Phone>
      </div>
    </MessengesContext.Provider>
  );
}

export default App;
