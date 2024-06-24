import React from 'react';
import {
  Alert,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import MessageList from './components/MessageList';
import ChatInput from './components/ChatInput';
import Header from './components/Header';
import getTheme from './styles/colors';
import ContextProvider from './Context/ContextProvider';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <ContextProvider>
      <SafeAreaView style={Style.Container}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={getTheme(isDarkMode).primary}
        />
        <Header />
        <MessageList />
        <ChatInput />
      </SafeAreaView>
    </ContextProvider>
  );
}

const Style = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#f7f7f7', // Light gray background
  },
});

export default App;
