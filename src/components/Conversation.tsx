import { IConversation, IMessage } from 'common';
import * as React from 'react';

import Message from './Message';
import MessageEditor from './MessageEditor';

const SHOW = 1;
const ADD = 2;

interface Props {
  conversation: IConversation;
  onLoadMessagesClick: (id: number) => void;
  onSaveMessage: (conversationId: number, message: string) => void;
}

interface State {
  mode: number;
}

export default class Conversation extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.renderEntity = this.renderEntity.bind(this);
    this.onAddMessageClick = this.onAddMessageClick.bind(this);
    this.onSaveMessage = this.onSaveMessage.bind(this);
    this.onCancelMessage = this.onCancelMessage.bind(this);
  }

  state = {
    mode: SHOW,
  };

  renderEntity(message: IMessage) {
    return (
      <Message message={message} key={message.id} />
    );
  }

  renderMessageEditor() {
    return (
      <MessageEditor
        onCancel={this.onCancelMessage}
        onSave={this.onSaveMessage}
      />
    );
  }

  onAddMessageClick() {
    this.setState({ mode: ADD });
  }

  onSaveMessage(text: string) {
    this.props.onSaveMessage(this.props.conversation.id, text);
  }

  onCancelMessage() {
    this.setState({ mode: SHOW });
  }

  render() {
    const { messages = [] } = this.props.conversation;
    const { mode } = this.state;

    return (
      <section className="conversation">
        <header>
          <h3>{this.props.conversation.name}</h3>
          <div>
            <button
              onClick={() => this.props.onLoadMessagesClick(this.props.conversation.id)}
            >load messages</button>
          </div>
        </header>
        {messages.map(this.renderEntity)}
        {messages.length > 0 && mode === SHOW && (
          <div className="buttons">
            <button onClick={this.onAddMessageClick}>add message</button>
          </div>
        )}
        {messages.length > 0 && mode === ADD && this.renderMessageEditor()}
      </section>
    );
  }
}
