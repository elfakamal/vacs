import { IMessage } from 'common';
import * as React from 'react';

interface Props {
  message?: IMessage;
  onCancel: () => void;
  onSave: (message: string) => void;
}

interface State {
  text: string;
}

export default class MessageEditor extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.close = this.close.bind(this);
    this.onSaveClick = this.onSaveClick.bind(this);
  }

  state = {
    text: '',
  };

  onChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    this.setState({ text: event.target.value });
  }

  close() {
    this.props.onCancel();
  }

  onSaveClick() {
    this.props.onSave(this.state.text);
    this.close();
  }

  render() {
    const { text } = this.state;

    return (
      <div className="message" style={{ height: 100 }}>
        <textarea
          style={{ width: '100%', height: '70%' }}
          onChange={this.onChange}
          value={text}
        />
        <div>
          <button onClick={this.close}>cancel</button>
          <button onClick={this.onSaveClick}>save</button>
        </div>
      </div>
    );
  }
}
