export interface IuserFakeData {
  userId: string;
}

export interface ImsgFakeData {
  msgUniqueId: string;
  ownerId: string;
  userName: string;
  textMsg: string;
  timeSent: string;
  filters: Ifilters;
}

export interface Ifilters {
  isBold: boolean;
  isItalic: boolean;
  isUnderline: boolean;
  isNumList: boolean;
  isBulletsList: boolean;
}
export interface Actions {
  type: string;
  payload?: {
    [key: string]: any;
  };
}

export interface IPayload<T> {
  key: string;
  value: T;
}
