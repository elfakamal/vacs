import * as React from 'react';

interface Props {
  message: IMessage;
}

const Message = (props: Props) => (
  <div style={{
    backgroundColor: '#F5F5F5',
    borderRadius: 3,
    padding: 20,
    margin: '5px 0',
  }}>
    {props.message.text}
  </div>
);

export default Message;
