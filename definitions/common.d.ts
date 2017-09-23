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
    uuid: string;
    firstname: string;
    lastname: string;
    email: string;
  }
  
  interface IJourneyNode {
    uuid: string;
    type: string;
  }
  
  interface IMessage {
    uuid: string;
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
    uuid: string;
    name: string;
    messages: IMessage[];
  }
}
