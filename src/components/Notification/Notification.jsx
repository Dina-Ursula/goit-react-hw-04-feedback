import React from 'react';
import PropTypes from 'prop-types';
import { MessageSection, Message } from './Notificayion.styled';

const Notification = ({ message }) => {
  return (
    <MessageSection>
      <Message>{message}</Message>
    </MessageSection>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
