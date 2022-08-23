import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {COLORS} from '../theme/Color';

export const FloatingLabelInput = props => {
  const [isFocused, setIsFocused] = useState(false);
  const [errorLabel, setErrorLabel] = useState('');

  const labelStyle = {
    position: 'absolute',
    left: 0,
    top: !isFocused ? 30 : 0,
    fontSize: !isFocused ? 20 : 14,
    color: !isFocused ? '#aaa' : '#000',
    fontWeight: !isFocused ? 'normal' : 'bold',
  };

  const focusHandler = () => {
    setIsFocused(true);
  };

  const endFocusHandler = () => {
    if (props.value.trim().length === 0) {
      setIsFocused(false);
      setErrorLabel(`*${props.label} is required*`);
    } else {
      setIsFocused(true);
      setErrorLabel('');
    }
  };

  return (
    <View style={styles.textInputContainer}>
      <Text style={labelStyle}>{props.label}</Text>
      <TextInput
        {...props}
        style={styles.textInput}
        onFocus={focusHandler}
        onEndEditing={endFocusHandler}
        blurOnSubmit={false}
      />
      <Text style={styles.errLabel}>{errorLabel}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    paddingTop: 15,
    marginBottom: 20,
  },
  textInput: {
    fontSize: 20,
    color: '#000',
    borderBottomWidth: 3,
    borderBottomColor: '#555',
  },
  errLabel: {
    fontStyle: 'italic',
    color: COLORS.error,
  },
});
