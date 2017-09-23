import { IMessage } from 'common';
import * as React from 'react';

interface Props {
  message: IMessage;
}

const Message = (props: Props) => (
  <div className="message">
    {props.message.text}
  </div>
);

export default Message;
