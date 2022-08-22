import s from "./Messenger.module.scss";
import MsgCard from "./components/MsgCard/MsgCard";
import MessengerForm from "./components/MessengerForm/MessengerForm";
import Answer from "./components/Answer/Answer";

const Messenger = ({msgData, userData, onSendMsg} : any) => {

// console.log(msgData);


  return (
    <div className={s.messenger}>
      <ul className={s.messenger__list}>
        {msgData?.map((msg: any) => {
          return (
            <li key={Math.random()} className={s.messenger__messege}>
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
