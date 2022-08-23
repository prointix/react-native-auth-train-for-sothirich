import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const SignUp = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>SignUp</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SignUp;
