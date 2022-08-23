import s from "./Messenger.module.scss";
import MsgCard from "./components/MsgCard/MsgCard";
import MessengerForm from "./components/MessengerForm/MessengerForm";
import Answer from "./components/Answer/Answer";
import { useContext, useEffect, useRef, useState } from "react";
import MessengesContext from "../../context/MessengesContext";

const Messenger = ({ msgData, userData, onSendMsg, msgListRef }: any) => {
  const { isAnswerOpen, setIsAnswerOpen } = useContext(MessengesContext);

  const [answerMsgData, setAnswerMsgData] = useState({
    name: "",
    text: "",
  });

  const onDataRequest = (userName: any, textMsg: any) => {
    setAnswerMsgData(() => ({ name: userName, text: textMsg }));
  };

  return (
    <div className={s.messenger}>
      <ul className={s.messenger__list} ref={msgListRef}>
        {msgData?.map((msg: any) => {
          return (
            <li key={Math.random()} className={s.messenger__messege}>
              <MsgCard
                msgData={msg}
                userId={userData}
                onAnswer={setIsAnswerOpen}
                onDataRequest={onDataRequest}
              />
            </li>
          );
        })}
      </ul>
      <section className={s.messenger__bottom}>
        <Answer isAnswerOpen={isAnswerOpen} answerMsgData={answerMsgData} />
        <MessengerForm onSubmit={onSendMsg} />
      </section>
    </div>
  );
};

export default Messenger;
