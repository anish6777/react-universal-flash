/// <reference types="react" />
import { ProviderValue } from './Message.types';
declare const MessageContext: import("react").Context<ProviderValue>;
declare const Provider: import("react").Provider<ProviderValue>;
export { Provider as MessageProvider, MessageContext };
