import React from 'react';
import {StyleSheet, View} from 'react-native';
import {COLORS} from '../theme/Color';

export const Body = props => {
  return <View style={styles.body}>{props.children}</View>;
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 50,
  },
});
