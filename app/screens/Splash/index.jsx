import React from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';

const Splash = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#ffffff" />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#06bcee',
  },
});
