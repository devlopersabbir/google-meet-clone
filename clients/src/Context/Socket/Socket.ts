import React, { createContext } from "react";
import { Socket } from "socket.io-client";

export interface ISocketContextState {
  socket: Socket | undefined;
}

export const defaultSocketContextState: ISocketContextState = {
  socket: undefined,
};

export type TSocketContextActions = "update_socket";

export type TSocketContextPayload = Socket;

export interface ISocketContextActions {
  type: TSocketContextActions;
  payload: TSocketContextPayload;
}

export const SocketReducer = (
  state: ISocketContextState,
  action: ISocketContextActions
) => {
  switch (action.type) {
    case "update_socket":
      return { ...state, socket: action.payload };
    default:
      return { ...state };
  }
};

interface ISocketContextProps {
  SocketState: ISocketContextState;
  SocketDispatch: React.Dispatch<ISocketContextActions>;
}

const SocketContext = createContext<ISocketContextProps>({
  SocketState: defaultSocketContextState,
  SocketDispatch: () => {},
});

export const SocketContextConsumer = SocketContext.Consumer;
export const SocketContextProvider = SocketContext.Provider;

export default SocketContext;
