import React, { useEffect, useState } from "react";
import s from "./Messenger.module.scss";
import { getMsgData, getUserData } from "../../utils/fakeApi";
import MsgCard from "./components/MsgCard/MsgCard";
import MessengerForm from "./components/MessengerForm/MessengerForm";
import Answer from "./components/Answer/Answer";

const Messenger = () => {
  interface IfakeData {
    _msgUniqueId: string;
    _ownerId: string;
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
    <div className={s.messenger}>
      <ul className={s.messenger__list}>
        {msgData?.map((msg) => {
          return (
            <li key={msg._msgUniqueId} className={s.messenger__messege}>
              <MsgCard msgData={msg} userId={userData} />
            </li>
          );
        })}
      </ul>
      <section className={s.messenger__bottom}>
        <Answer/>
        <MessengerForm />
      </section>
    </div>
  );
};

export default Messenger;
