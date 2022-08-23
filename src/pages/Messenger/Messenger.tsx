import Answer from "./components/Answer/Answer";
import MsgCard from "./components/MsgCard/MsgCard";
import MessengerForm from "./components/MessengerForm/MessengerForm";
import s from "./Messenger.module.scss";

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

interface IMessenger {
  msgData : Array<IfakeData>;
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
        {msgData?.map((msg: IfakeData) => {
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
