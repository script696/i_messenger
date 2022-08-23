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



const fakeMsgData: Array<IfakeData> = [
  {
    msgUniqueId: `${Math.random()}`,
    ownerId: "000000",
    userName: "Евгений",
    textMsg: "Хочу программировать",
    timeSent: "15:55",
    filters: {
      isBold: false,
      isItalic: false,
      isUnderline: false,
      isNumList: false,
      isBulletsList: false,
    },
  },
  {
    msgUniqueId: `${Math.random()}`,
    ownerId: "111111",
    userName: "Чат-бот",
    textMsg: "Попробуй python",
    timeSent: "15:55",
    filters: {
      isBold: false,
      isItalic: false,
      isUnderline: false,
      isNumList: false,
      isBulletsList: false,
    },
  },
  {
    msgUniqueId: `${Math.random()}`,
    ownerId: "000000",
    userName: "Евгений",
    textMsg: "Спасибо за ответ",
    timeSent: "15:55",
    filters: {
      isBold: false,
      isItalic: false,
      isUnderline: false,
      isNumList: false,
      isBulletsList: false,
    },
  },
  {
    msgUniqueId: `${Math.random()}`,
    ownerId: "111111",
    userName: "Чат-бот",
    textMsg: "Был рад помочь, обращайся!!!",
    timeSent: "15:55",
    filters: {
      isBold: false,
      isItalic: false,
      isUnderline: false,
      isNumList: false,
      isBulletsList: false,
    },
  },
];

const fakeUserData: IuserFakeData = {
  userId: "000000",
};

const getMsgData = (): Promise<Array<IfakeData>> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(fakeMsgData);
    }, 1000);
  });
};
const getUserData = (): Promise<IuserFakeData> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(fakeUserData);
    }, 1000);
  });
};

const sendMsg = ({
  userName,
  textMsg,
  filters: { isBold },
  filters: { isItalic },
  filters: { isUnderline },
  filters: { isNumList },
  filters: { isBulletsList },
}: any) : Promise<Array<IfakeData>> => {
  console.log(userName, textMsg);
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fakeMsgData.push({
        msgUniqueId: `${Math.random()}`,
        ownerId: "000000",
        userName: userName,
        textMsg: textMsg,
        timeSent: "15:55",
        filters: {
          isBold: isBold,
          isItalic: isItalic,
          isUnderline: isUnderline,
          isNumList: isNumList,
          isBulletsList: isBulletsList,
        },
      });
      resolve(fakeMsgData);
    }, 1000);
  });
};


export { getMsgData, getUserData, sendMsg };
