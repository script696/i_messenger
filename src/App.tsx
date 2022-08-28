import { getMsgData, getUserData, sendMsg } from "./utils/fakeApi";
import { reducer1, initialState1 } from "./reducer/reducer1";
import { reducer2, initialState2 } from "./reducer/reducer2";
import { Redirect, Route, Switch } from "react-router-dom";
import { useEffect, useReducer, useRef, useState } from "react";
import Bell from "./pages/Bell/Bell";
import Messenger from "./pages/Messenger/Messenger";
import MessengesContext from "./context/MessengesContext";
import Question from "./pages/Question/Question";
import Phone from "./shared/Phone/Phone";
import Operator from "./pages/Operator/Operator";
import { ImsgFakeData, IuserFakeData } from "./types/types";
import "./styles/index.scss";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import { resetAnswer, resetForm } from "./actions/actions";

const App = () => {
  const [state1, dispatch1] = useReducer(reducer1, initialState1);
  const [state2, dispatch2] = useReducer(reducer2, initialState2);
  const [msgData, setMsgData] = useState<Array<ImsgFakeData>>([]);
  const [userData, setUsergData] = useState<IuserFakeData>({
    userId: "000000",
  });

  const msgListRef = useRef<any>();

  useEffect(() => {
    (async () => {
      const [msgDataRes, userDataRes] = await Promise.all([
        getMsgData(),
        getUserData(),
      ]);

      setMsgData((): Array<ImsgFakeData> => [...msgDataRes]);
      setUsergData((): IuserFakeData => ({ ...userDataRes }));
    })();
  }, []);

  useEffect(() => {
    if (msgListRef.current) {
      msgListRef.current.scrollTop = msgListRef.current.scrollHeight;
    }
  }, [msgData]);

  const onSendMsg = (): void => {
    const response = async () => {
      try {
        const res: Array<ImsgFakeData> = await sendMsg(state1);
        setMsgData((prev): Array<ImsgFakeData> => [...prev, ...res]);
      } catch (e) {
        console.log(e);
      } finally {
        dispatch1(resetForm());
        dispatch2(resetAnswer());
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
            <Route path="*" exact component={PageNotFound}/>
          </Switch>
        </Phone>
      </div>
    </MessengesContext.Provider>
  );
};

export default App;
