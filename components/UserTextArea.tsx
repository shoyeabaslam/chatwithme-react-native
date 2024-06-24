import {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const UserTextArea: FC<{message: string}> = ({message}) => {
  return (
    <View>
      <Text style={styles.userMessage}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  userMessage: {
    color: '#000001',
  },
});

export default UserTextArea;
