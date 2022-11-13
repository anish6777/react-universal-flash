import { createContext } from 'react';
import { ProviderValue } from './Message.types';

const MessageContext = createContext<ProviderValue>({} as ProviderValue);
const { Provider } = MessageContext;

export { Provider as MessageProvider, MessageContext };
