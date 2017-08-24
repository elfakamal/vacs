interface IUser {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
}

interface JourneyNode {
  id: string;
  type: string;
}

interface IMessage {
  text: string;
  author: IUser;
  date: number;
}

interface IJourney extends IMessage {
  nodes: JourneyNode[];
}

interface IConversation {
  entities: IMessage[];
}
