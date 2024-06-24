import React, {useEffect, useRef} from 'react';
import {StyleSheet, Text, View, Animated, Easing} from 'react-native';

const Loading = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 500,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0,
          duration: 500,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [opacity]);
  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.loadingAnimation, {opacity}]}>
        &#11044; &#11044; &#11044;
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingAnimation: {
    fontSize: 8,
    textAlign: 'center',
    color: '#417BCD',
  },
});

export default Loading;
