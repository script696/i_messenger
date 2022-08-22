import React, { createContext } from "react";

interface IMessengesContext {
  state: any;
  dispatch: React.Dispatch<any>;
}

const MessengesContext = createContext<{
  state?: any;
  dispatch?: any;
  //React.Dispatch<any>
}>({});

export default MessengesContext;
