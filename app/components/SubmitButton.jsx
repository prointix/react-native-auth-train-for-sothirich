import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {COLORS} from '../theme/Color';

export const SubmitButton = props => {
  return (
    <TouchableOpacity style={styles.button} {...props}>
      <Text style={styles.buttonText}>{props.label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '75%',
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 30,
    padding: 10,
    shadowOpacity: 1,
    elevation: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
