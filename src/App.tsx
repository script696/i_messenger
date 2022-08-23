import React, { useEffect, useReducer, useRef, useState } from "react";
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

const App = ()=> {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isAnswerOpen, setIsAnswerOpen] = useState(false);
  const msgListRef = useRef<any>(null);

  const [msgData, setMsgData] = useState<Array<IfakeData>>();
  const [userData, setUsergData] = useState<Array<IfakeData2>>();

  useEffect(() => {
    const response = async () => {
      const [msgDataRes, userDataRes] = await Promise.all([
        getMsgData(),
        getUserData(),
      ]);

      setMsgData((): Array<IfakeData> => [...msgDataRes]);
      setUsergData(() => [...userDataRes]);
    };
    response();
  }, []);


  useEffect(()=>{
    msgListRef!.current!.scrollTop = msgListRef!.current!.scrollHeight;

  },[msgData])
 

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
        setIsAnswerOpen(prev => false)
        dispatch({
          type: "reset",
        });
      }
    };
    response();
  };


  return (
    <MessengesContext.Provider value={{ state, dispatch, isAnswerOpen, setIsAnswerOpen }}>
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
}

export default App;
