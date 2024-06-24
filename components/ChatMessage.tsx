// src/components/ChatMessage.js
import React, {FC, useContext, useEffect} from 'react';
import {View, StyleSheet, ToastAndroid} from 'react-native';
import BotTextArea from './BotTextArea';
import UserTextArea from './UserTextArea';

const ChatMessage: FC<{sender: string; message: string}> = ({
  sender,
  message,
}) => {
  const isBot = sender === 'bot';

  return (
    <View
      style={[
        styles.constainer,
        isBot ? styles.botMessageContainer : styles.userMessageContainer,
      ]}>
      {isBot ? (
        <BotTextArea message={message} />
      ) : (
        <UserTextArea message={message} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    maxWidth: '90%',
    elevation: 1,
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  botMessageContainer: {
    alignSelf: 'flex-start',
    backgroundColor: '#6229E8',
  },
  userMessageContainer: {
    alignSelf: 'flex-end',
    backgroundColor: '#DED7ED',
  },
});

export default ChatMessage;
