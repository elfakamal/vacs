import { IConversation, IMessage } from 'common';
import * as React from 'react';

import Message from './Message';

interface Props {
  conversation: IConversation;
  onLoadMessagesClick: (uuid: string) => void;
}

export default class Conversation extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);

    this.renderEntity = this.renderEntity.bind(this);
  }

  renderEntity(message: IMessage) {
    return (
      <Message message={message} key={message.uuid} />
    );
  }

  render() {
    const { messages = [] } = this.props.conversation;

    return (
      <section className="conversation">
        <header>
          <h3>{this.props.conversation.name}</h3>
          <button
            onClick={() => this.props.onLoadMessagesClick(this.props.conversation.uuid)}
          >load</button>
        </header>
        {messages.map(this.renderEntity)}
      </section>
    );
  }
}
