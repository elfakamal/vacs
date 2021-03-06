import { IConversation, State } from 'common';
import * as React from 'react';
import { connect } from 'react-redux';

import {
  AddMessageRequestAction,
  ConversationsRequestAction,
  loadConversations,
  loadMessages,
  MessagesRequestAction,
  requestAddMessage,
} from '../actions';

import Conversation from '../components/Conversation';

interface Props {
  conversations?: IConversation[];
}

interface DispatchProps {
  loadConversations: () => ConversationsRequestAction;
  loadMessages: (conversationId: number) => MessagesRequestAction;
  requestAddMessage: (conversationId: number, message: string) => AddMessageRequestAction;
}

const mapStateToProps = (state: State): State => ({
  conversations: state.conversations,
  user: state.user,
});

const mapDispatchToProps: DispatchProps = {
  requestAddMessage,
  loadConversations,
  loadMessages,
};

type AllProps = Readonly<State & DispatchProps & Props>;

class App extends React.Component<AllProps> {
  constructor(props: AllProps) {
    super(props);

    this.renderConversation = this.renderConversation.bind(this);
    this.onLoadMessagesClick = this.onLoadMessagesClick.bind(this);
  }

  componentDidMount() {
    this.props.loadConversations();
  }

  onLoadMessagesClick(id: number) {
    this.props.loadMessages(id);
  }

  renderConversation(conversation: IConversation) {
    return (
      <Conversation
        conversation={conversation}
        key={conversation.id}
        onLoadMessagesClick={this.onLoadMessagesClick}
        onSaveMessage={this.props.requestAddMessage}
      />
    );
  }

  render() {
    const { conversations } = this.props;

    return (
      <div>
        {conversations.map(this.renderConversation)}
      </div>
    );
  }
}

export default connect<State, DispatchProps, Props>(mapStateToProps, mapDispatchToProps)(App);
