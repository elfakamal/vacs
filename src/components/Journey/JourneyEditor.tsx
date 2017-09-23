import { IJourney, IJourneyNode } from 'common';
import * as React from 'react';

interface Props {
  journey: IJourney;
}

interface State {
  nodes: IJourneyNode[];
}

export default class JourneyEditor extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  state = {
    nodes: this.props.journey.nodes,
  };

  renderNode(node: IJourneyNode) {
    return (
      <div key={node.uuid}>{node.type}</div>
    );
  }

  render() {
    return (
      <div>
        <header>Journey editor</header>
        <div>
          {this.state.nodes.map(this.renderNode)}
        </div>
      </div>
    );
  }
}
