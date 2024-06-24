import {FC, ReactNode, useState} from 'react';
import {MessagesContext} from './MessagesContext';
import {ChatDataType} from '../types/ChatDataType';

const ContextProvider: FC<{children: ReactNode}> = ({children}) => {
  const [messages, setMessages] = useState<ChatDataType[] | null>([]);
  return (
    <MessagesContext.Provider value={{messages, setMessages}}>
      {children}
    </MessagesContext.Provider>
  );
};

export default ContextProvider;
