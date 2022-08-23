import React, { createContext } from "react";

interface IMessengesContext {
  state: any;
  dispatch: React.Dispatch<any>;
}

const MessengesContext = createContext<{
  state?: any;
  dispatch?: any;
  [key:string]: any;
}>({});

export default MessengesContext;
