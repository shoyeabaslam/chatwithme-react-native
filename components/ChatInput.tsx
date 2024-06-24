import React, {useContext, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Pressable,
  Image,
  ToastAndroid,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import {MessagesContext} from '../Context/MessagesContext';
import {sendPromptToGPT} from '../services/api';
import {ChatDataType} from '../types/ChatDataType';
import Loading from './Loading';

const ChatInput = () => {
  const {setMessages} = useContext(MessagesContext);
  const [inputValue, setInputValue] = useState<string>('');
  const moveUp = useRef(new Animated.Value(0)).current;
  const textInputRef = useRef<TextInput>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFocus = () => {
    Animated.spring(moveUp, {
      toValue: -38,
      speed: 1,
      useNativeDriver: true,
      bounciness: 0,
    }).start();
  };

  const handleBlur = () => {
    if (textInputRef.current) {
      const textInput = textInputRef.current;
      textInput.blur();
    }
    Animated.spring(moveUp, {
      toValue: 0,
      speed: 1,
      useNativeDriver: true,
      bounciness: 0,
    }).start();
  };

  const onPressFunction = () => {
    if (inputValue.trim().length === 0) {
      ToastAndroid.show('Please! Enter prompt', ToastAndroid.SHORT);
      return;
    }
    setInputValue('');
    setMessages(prev => {
      const data: ChatDataType[] = [
        {
          id: prev?.length! + 1,
          sender: 'user',
          message: inputValue,
        },
      ];
      if (prev) {
        return [...data, ...prev];
      }
      return data;
    });
    setIsLoading(prev => !prev);
    handleGPTMessage();
  };

  const handleGPTMessage = async () => {
    try {
      const json = await sendPromptToGPT(inputValue);
      setMessages(prev => {
        if (prev) {
          const data: ChatDataType[] = [
            {
              id: prev?.length! + 1,
              sender: 'bot',
              message: json,
            },
            ...prev,
          ];
          return data;
        }
        return prev;
      });
    } catch (err) {
      ToastAndroid.show(err + '', ToastAndroid.SHORT);
    }
    setIsLoading(prev => !prev);
    handleBlur();
  };

  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.botOuterContainer,
            {transform: [{translateY: moveUp}]},
          ]}>
          <View style={[styles.loadingContainer]}>
            {isLoading && (
              <View style={styles.loadingContainer}>
                <Loading />
              </View>
            )}
            <Image
              style={styles.botImage}
              source={require('../assets/images/chatbot.png')}
            />
          </View>
        </Animated.View>
        <View style={styles.box}>
          <TextInput
            ref={textInputRef}
            style={styles.textInput}
            multiline
            placeholder="Message"
            placeholderTextColor="grey"
            value={inputValue}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChangeText={text => setInputValue(text)}
          />
        </View>
        <View style={styles.button}>
          <Pressable onPress={onPressFunction}>
            <Image
              style={styles.image}
              source={require('../assets/images/send.png')}
            />
          </Pressable>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },

  botOuterContainer: {
    position: 'absolute',
    left: 18,
  },
  botInnerContainer: {
    position: 'relative',
  },
  loadingContainer: {
    position: 'absolute',
    top: -12,
    left: 4,
  },
  botImage: {
    width: 30,
    height: 30,
  },

  box: {
    flex: 1,
    paddingVertical: 3,
    backgroundColor: '#fff',
    borderRadius: 25, // Rounded corners
    // iOS shadow properties
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 3,
    // Android shadow property
    elevation: 2,
  },
  textInput: {
    paddingVertical: 6,
    paddingHorizontal: 15,
    color: 'black',
  },
  button: {
    width: 45,
    height: 45,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    padding: 3,
    backgroundColor: '#6229E8',
    borderRadius: 100, // Rounded corners
    // iOS shadow properties
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 3,
    // Android shadow property
    elevation: 8,
  },
  image: {
    width: 25,
    height: 25,
  },
});

export default ChatInput;
