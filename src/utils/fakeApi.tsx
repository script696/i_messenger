interface IfakeData {
  _userId: string;
  userName: string;
  textMsg: string;
  timeSent: string;
}
interface IfakeData2 {
  _userId: string;
}

const fakeMsgData: Array<IfakeData> = [
  {
    _userId: "000000",
    userName: "Евгений",
    textMsg: "Хочу программировать",
    timeSent: "15:55",
  },
  {
    _userId: "111111",
    userName: "Чат-бот",
    textMsg: "Попробуй python",
    timeSent: "15:55",
  },
  {
    _userId: "000000",
    userName: "Евгений",
    textMsg: "Спасибо за ответ",
    timeSent: "15:55",
  },
  {
    _userId: "111111",
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
    }, 2000);
  });
};
const getUserData = (): Promise<any> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(fakeUserData);
    }, 2000);
  });
};

export { getMsgData, getUserData };
