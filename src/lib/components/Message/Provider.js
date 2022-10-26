import { createContext } from 'react';

const MessageContext = createContext();
const { MessageProvider } = MessageContext;

export { MessageProvider, MessageContext };
