import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const SignIn = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>SignIn</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SignIn;
