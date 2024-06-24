import React, { createContext } from "react";
import { ChatDataType } from "../types/ChatDataType";


interface ContextType{
    messages:ChatDataType[] | null,
    setMessages:React.Dispatch<React.SetStateAction<ChatDataType[] | null>>,
}

const initialValue = {
    messages:[],
    setMessages:()=>{},
}

export const MessagesContext = createContext<ContextType>(initialValue)