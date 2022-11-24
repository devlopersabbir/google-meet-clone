import React, {
  PropsWithChildren,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";

import {
  defaultSocketContextState,
  SocketContextProvider,
  SocketReducer,
} from "./Socket";
import { io } from "socket.io-client";

export interface ISocketContextComponentProps extends PropsWithChildren {}

const SocketContextComponent: React.FunctionComponent<
  ISocketContextComponentProps
> = ({ children }) => {
  const [SocketState, SocketDispatch] = useReducer(
    SocketReducer,
    defaultSocketContextState
  );
  const { current: socket } = useRef(
    io("http://localhost:3000", {
      autoConnect: false,
    })
  );
  useEffect(() => {
    console.log("Connecting....");
    SocketDispatch({ type: "update_socket", payload: socket });
    socket.connect();

    return () => {
      socket.disconnect();
    };
  }, []);
  return (
    <SocketContextProvider value={{ SocketState, SocketDispatch }}>
      {children}
    </SocketContextProvider>
  );
};

export default SocketContextComponent;
