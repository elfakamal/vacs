import { IConversation, State } from 'common';
import * as React from 'react';
import { connect } from 'react-redux';
// import * as Rx from 'rxjs';

import {
  ConversationRequestAction,
  loadConversations,
} from '../actions';

import Conversation from '../components/Conversation';

interface Props {
  conversations?: IConversation[];
}

interface DispatchProps {
  loadConversations: () => ConversationRequestAction;
}

const mapStateToProps = (state: State): State => ({
  conversations: state.conversations,
  user: state.user,
});

const mapDispatchToProps: DispatchProps = {
  loadConversations,
};
type AllProps = Readonly<State & DispatchProps & Props>;

class App extends React.Component<AllProps> {
  constructor(props: AllProps) {
    super(props);

    this.renderConversation = this.renderConversation.bind(this);
  }

  componentDidMount() {
    this.props.loadConversations();
  }

  renderConversation(conversation: IConversation) {
    return (
      <Conversation conversation={conversation} key={conversation.uuid}/>
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
