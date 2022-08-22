import React, { useEffect, useState } from "react";
import s from "./Messenger.module.scss";
import { getMsgData, getUserData, sendMsg } from "../../utils/fakeApi";
import MsgCard from "./components/MsgCard/MsgCard";
import MessengerForm from "./components/MessengerForm/MessengerForm";
import Answer from "./components/Answer/Answer";

const Messenger = () => {
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

  const onSendMsg = (msgName: any, msgText: any, resetInputs : any): void => {
    const response = async () => {
      try {
        const res: any = await sendMsg(msgName, msgText);
        setMsgData((): Array<IfakeData> => [...res]);
      } catch (e) {
        console.log(e);
      } finally {
        resetInputs()
      }
    };
    response();
  };

  return (
    <div className={s.messenger}>
      <ul className={s.messenger__list}>
        {msgData?.map((msg) => {
          return (
            <li key={msg.msgUniqueId} className={s.messenger__messege}>
              <MsgCard msgData={msg} userId={userData} />
            </li>
          );
        })}
      </ul>
      <section className={s.messenger__bottom}>
        <Answer />
        <MessengerForm onSubmit={onSendMsg} />
      </section>
    </div>
  );
};

export default Messenger;
