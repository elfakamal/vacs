import * as Rx from '@reactivex/rxjs';
import * as React from 'react';

import getMessages from '../services/messages';
import Message from './Message';

// tslint:disable-next-line: no-empty-interface
interface Props {
  conversation: IConversation;
}

interface State {
  entities: IConversation['entities'];
}

export default class Conversation extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.renderEntity = this.renderEntity.bind(this);
  }

  state = {
    entities: [],
  } as State;

  componentDidMount() {
    const state$ = Rx.Observable.fromPromise(getMessages(this.props.conversation.uuid));

    state$.subscribe(
      (entities: IMessage[]) => {
        this.setState({ entities });
      },
      (error: any) => {
        console.log(error);
      },
    );
  }

  renderEntity(message: IMessage) {
    return (
      <Message message={message} key={message.uuid} />
    );
  }

  render() {
    return (
      <section style={{ width: '80%', margin: '50px auto' }}>
        <header>
          <h3>{this.props.conversation.name}</h3>
        </header>
        {this.state.entities.map(this.renderEntity)}
      </section>
    );
  }
}
