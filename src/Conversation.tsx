import * as React from 'react';

import Message from './Message';

// tslint:disable-next-line: no-empty-interface
interface Props extends IConversation {}

interface State {
  entities: IConversation['entities'];
}

export default class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.renderEntity = this.renderEntity.bind(this);
  }

  renderEntity(entity: IMessage) {
    return (
      <Message {...entity} />
    );
  }

  render() {
    return (
      <div>
        {this.state.entities.map(this.renderEntity)}
      </div>
    );
  }
}
