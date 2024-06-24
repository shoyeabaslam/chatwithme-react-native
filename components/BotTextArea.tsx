import {FC, useEffect, useState} from 'react';
import {StyleSheet, Text, ToastAndroid, View} from 'react-native';

const BotTextArea: FC<{message: string}> = ({message}) => {
  const [botMessage, setBotMessage] = useState({
    Respond: '',
    Correction: '',
    Rephrase: [],
    VocabularyEnhancement: '',
    Tip: '',
  });

  useEffect(() => {
    const parseMessage = async () => {
      try {
        const data = await JSON.parse(message);
        const {
          Respond,
          Correction,
          Rephrase,
          'Vocabulary Enhancement': VocabularyEnhancement,
          Tip,
        } = data;
        setBotMessage({
          Respond,
          Correction,
          Rephrase,
          VocabularyEnhancement,
          Tip,
        });
      } catch (err) {
        ToastAndroid.show(`Error: ${err}`, ToastAndroid.SHORT);
      }
    };

    parseMessage();
  }, []);

  return (
    <View>
      {botMessage.Respond && (
        <Text style={styles.botMessage}>{botMessage.Respond}</Text>
      )}
      {botMessage.Correction && (
        <>
          <Text style={styles.headingText}>Corrections:</Text>
          <Text style={styles.innerText}>{botMessage.Correction}</Text>
        </>
      )}
      {botMessage.Rephrase && (
        <>
          <Text style={styles.headingText}>Rephrase:</Text>
          {botMessage.Rephrase.map((item, index) => (
            <Text style={styles.innerText} key={index}>{`${
              index + 1
            } ${item}`}</Text>
          ))}
        </>
      )}
      {botMessage.VocabularyEnhancement && (
        <>
          <Text style={styles.headingText}>Vocabulary Enhancement:</Text>
          <Text style={styles.innerText}>
            {botMessage.VocabularyEnhancement}
          </Text>
        </>
      )}
      {botMessage.Tip && (
        <>
          <Text style={styles.headingText}>Tip:</Text>
          <Text style={styles.innerText}>{botMessage.Tip}</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  botMessage: {
    color: '#FEFDFF',
    fontWeight: 'bold',
  },

  headingText: {
    fontWeight: 'bold',
    color: '#FEFDFF',
    marginVertical: 4,
  },
  innerText: {
    paddingHorizontal: 4,
    color: '#FEFDFF',
  },
});

export default BotTextArea;
