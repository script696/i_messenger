import React, { useEffect, useState } from "react";
import s from "./Messenger.module.scss";
import { getMsgData, getUserData } from "../../utils/fakeApi";
import MsgCard from "./components/MsgCard";

const Messenger = () => {
  interface IfakeData {
    _userId: string;
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

  return (
    <ul className={s.messenger}>
      <li className={s.messenger__messege}><MsgCard/></li>
      <li className={s.messenger__messege}></li>
      <li className={s.messenger__messege}></li>
      <li className={s.messenger__messege}></li>
    </ul>
  );
};

export default Messenger;
