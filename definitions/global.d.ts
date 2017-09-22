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
  uuid: string;
  name: string;
  entities: IMessage[];
}
