import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../../theme/Color';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
});

export default Home;
