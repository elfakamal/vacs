import * as React from 'react';

import Conversation from './Conversation';

// tslint:disable-next-line: no-empty-interface
interface Props {}

interface State {
  user: IUser;
  conversations: IConversation[];
}

export default class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.renderConversation = this.renderConversation.bind(this);
  }

  renderConversation(conversation: IConversation) {
    return (
      <Conversation {...conversation} />
    );
  }

  render() {
    return (
      <div>
        {this.state.conversations.map(this.renderConversation)}
      </div>
    );
  }
}
