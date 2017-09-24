declare module 'common' {
  import { Reducer } from 'redux';

  interface Action<T extends string> {
    type: T;
  }

  interface Dict<T> {
    [key: string]: T;
  }

  type Pred<T> = (x: T) => boolean;

  interface ReducersMapObject {
    [key: string]: Reducer<State>;
  }
  
  interface State {
    user?: IUser;
    conversations: IConversation[];
  }

  interface IUser {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
  }
  
  interface IJourneyNode {
    id: number;
    type: string;
  }
  
  interface IMessage {
    id: number;
    text: string;
    author: string;
    conversation: string;
    date: number;
  }
  
  interface IJourney extends IMessage {
    nodes: IJourneyNode[];
  }
  
  interface IConversation {
    author: string;
    id: number;
    name: string;
    messages: IMessage[];
  }
}
