import * as Rx from '@reactivex/rxjs';
import * as React from 'react';

import getConversations from '../services/conversations';
import Conversation from './Conversation';

// tslint:disable-next-line: no-empty-interface
interface Props {}

interface State {
  user: IUser;
  conversations: IConversation[];
}

const user: IUser = {
  uuid: 'user-1',
  firstname: 'toto',
  lastname: 'tata',
  email: 'toto@tata.com',
};

export default class App extends React.Component<Readonly<Props>, State> {
  constructor(props: Props) {
    super(props);

    this.renderConversation = this.renderConversation.bind(this);
  }

  state = {
    conversations: [],
    user,
  } as State;

  componentDidMount() {
    const state$ = Rx.Observable.fromPromise(getConversations());

    state$.subscribe(
      (conversations: IConversation[]) => {
        this.setState({ conversations });
      },
      error => {
        console.log(error);
      },
    );
  }

  renderConversation(conversation: IConversation) {
    return (
      <Conversation conversation={conversation} key={conversation.uuid}/>
    );
  }

  render() {
    const { conversations } = this.state;

    return (
      <div>
        {conversations.map(this.renderConversation)}
      </div>
    );
  }
}
