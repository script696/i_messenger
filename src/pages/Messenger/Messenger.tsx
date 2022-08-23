import Answer from "./components/Answer/Answer";
import MsgCard from "./components/MsgCard/MsgCard";
import MessengerForm from "./components/MessengerForm/MessengerForm";
import {ImsgFakeData, IuserFakeData} from '../../types/types'
import s from "./Messenger.module.scss";

interface IMessenger {
  msgData : Array<ImsgFakeData>;
  userData : IuserFakeData;
  onSendMsg : () => void;
  msgListRef : any;
}

const Messenger = ({
  msgData,
  userData,
  onSendMsg,
  msgListRef,
}: IMessenger) => {


  return (
    <div className={s.messenger}>
      <ul className={s.messenger__list} ref={msgListRef}>
        {msgData?.map((msg: ImsgFakeData) => {
          return (
            <li key={Math.random()} className={s.messenger__messege}>
              <MsgCard
                msgData={msg}
                userId={userData}
              />
            </li>
          );
        })}
      </ul>
      <section className={s.messenger__bottom}>
        <Answer/>
        <MessengerForm onSubmit={onSendMsg} />
      </section>
    </div>
  );
};

export default Messenger;
