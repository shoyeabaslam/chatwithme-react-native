import React, {useContext, useRef, useEffect} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import ChatMessage from './ChatMessage';
import {MessagesContext} from '../Context/MessagesContext';

const MessageList = () => {
  const {messages} = useContext(MessagesContext);
  const flatListRef = useRef<ScrollView>(null);
  const sortedMessages = messages?.sort((a, b) => a.id! - b.id!);
  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToEnd({animated: true});
    }
  }, [messages]);
  return (
    <SafeAreaView style={styles.scrollViewContent}>
      <ScrollView ref={flatListRef}>
        <View>
          <ChatMessage
            message={`{"Respond":"Hi there! Ask me anything, and I'll help you improve by correcting it."}`}
            sender="bot"
          />

          {sortedMessages?.map(message => (
            <ChatMessage
              key={message.id}
              message={message.message}
              sender={message.sender}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
});

export default MessageList;
