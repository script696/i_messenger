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

const fakeMsgData: Array<IfakeData> = [
  {
    msgUniqueId: "12DF124asf",
    ownerId: "000000",
    userName: "Евгений",
    textMsg: "Хочу программировать",
    timeSent: "15:55",
  },
  {
    msgUniqueId: "22DF124asf",
    ownerId: "111111",
    userName: "Чат-бот",
    textMsg: "Попробуй python",
    timeSent: "15:55",
  },
  {
    msgUniqueId: "32DF124asf",
    ownerId: "000000",
    userName: "Евгений",
    textMsg: "Спасибо за ответ",
    timeSent: "15:55",
  },
  {
    msgUniqueId: "42DF124asf",
    ownerId: "111111",
    userName: "Чат-бот",
    textMsg: "Был рад помочь, обращайся",
    timeSent: "15:55",
  },
];

const fakeUserData: Array<IfakeData2> = [
  {
    _userId: "000000",
  },
];

const getMsgData = (): Promise<any> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(fakeMsgData);
    }, 1000);
  });
};
const getUserData = (): Promise<any> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(fakeUserData);
    }, 1000);
  });
};

const sendMsg = (msgName: any, msgText: any) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fakeMsgData.push({
        msgUniqueId: `${Math.random()}`,
        ownerId: "000000",
        userName: msgName,
        textMsg: msgText,
        timeSent: "15:55",
      });
      resolve(fakeMsgData);
    }, 1000);
  });
};

export { getMsgData, getUserData, sendMsg };
