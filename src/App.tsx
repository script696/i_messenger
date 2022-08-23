import React, { useEffect, useReducer, useRef, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Bell from "./pages/Bell/Bell";
import Messenger from "./pages/Messenger/Messenger";
import Operator from "./pages/Operator/Operator";
import Question from "./pages/Question/Question";
import Phone from "./shared/Phone/Phone";
import MessengesContext from "./context/MessengesContext";
import { reducer1, initialState1 } from "./reducer/reducer1";
import { reducer2, initialState2 } from "./reducer/reducer2";
import { getMsgData, getUserData, sendMsg } from "./utils/fakeApi";
import "./styles/index.scss";

interface Ifilters {
  isBold: boolean;
  isItalic: boolean;
  isUnderline: boolean;
  isNumList: boolean;
  isBulletsList: boolean;
}

interface IfakeData {
  msgUniqueId: string;
  ownerId: string;
  userName: string;
  textMsg: string;
  timeSent: string;
  filters: Ifilters;
}

interface IuserFakeData {
  userId: string;
}

const App = () => {
  const [state1, dispatch1] = useReducer(reducer1, initialState1);
  const [state2, dispatch2] = useReducer(reducer2, initialState2);
  const [msgData, setMsgData] = useState<Array<IfakeData>>([]);
  const [userData, setUsergData] = useState<IuserFakeData>({ userId: "000000" });




  const msgListRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    (async () => {
      const [msgDataRes, userDataRes] = await Promise.all([
        getMsgData(),
        getUserData(),
      ]);

      setMsgData((): Array<IfakeData> => [...msgDataRes]);
      setUsergData((): IuserFakeData => ({ ...userDataRes }));
    })();
  }, []);

  useEffect(() => {
    msgListRef!.current!.scrollTop = msgListRef!.current!.scrollHeight;
  }, [msgData]);

  const onSendMsg = (): void => {
    const response = async () => {
      try {
        const res: Array<IfakeData>  = await sendMsg(state1);
        setMsgData((prev): Array<IfakeData> => [...prev, ...res]);
      } catch (e) {
        console.log(e);
      } finally {
        dispatch1({
          type: "reset",
        });
        dispatch2({
          type: "reset",
        });
      }
    };
    response();
  };

 
  return (
    <MessengesContext.Provider
      value={{
        state1,
        dispatch1,
        state2,
        dispatch2,
      }}
    >
      <div className="container">
        <Phone>
          <Switch>
            <Route path="/messenger" exact>
              <Messenger
                msgData={msgData}
                userData={userData}
                onSendMsg={onSendMsg}
                msgListRef={msgListRef}
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
};

export default App;
