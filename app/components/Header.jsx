import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {COLORS} from '../theme/Color';

export const Header = props => {
  return <Text style={styles.text}>{props.label}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: COLORS.black,
    fontSize: 40,
    fontWeight: 'bold',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignSelf: 'center',
    marginVertical: 70,
  },
});
