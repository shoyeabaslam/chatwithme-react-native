import {Image, StyleSheet, Text, View, useColorScheme} from 'react-native';
import getTheme from '../styles/colors';

function Header(): React.JSX.Element {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.innerContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/chatbot.png')}
        />
        <Text style={styles.text}>ChatWithMe.</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    backgroundColor: '#6229E8',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    padding: 4,
  },
  innerContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  image: {
    width: 40,
    height: 40,
    objectFit: 'cover',
    borderWidth: 1,
    borderRadius: 100,
    borderColor: 'white',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    marginLeft: 15,
  },
});

export default Header;
