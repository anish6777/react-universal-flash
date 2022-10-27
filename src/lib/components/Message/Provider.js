import { createContext } from 'react';

const MessageContext = createContext();
const { Provider } = MessageContext;

export { Provider as MessageProvider, MessageContext };
