import React, {forwardRef, useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {COLORS} from '../theme/Color';

export const FloatingLabelInput = forwardRef((props, ref) => {
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

      if (props.type === 'email') {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(props.value) === false) {
          setErrorLabel('*Email is invalid*');
        } else {
          setErrorLabel('');
        }
      } else if (props.type === 'password') {
        if (props.value.trim().length < 6) {
          setErrorLabel('*Password must be longer than 5 characters*');
        } else {
          setErrorLabel('');
        }
      } else {
        setErrorLabel('');
      }
    }
  };

  return (
    <View style={styles.textInputContainer}>
      <Text style={labelStyle}>{props.label}</Text>
      <TextInput
        {...props}
        ref={ref}
        style={styles.textInput}
        onFocus={focusHandler}
        onEndEditing={endFocusHandler}
        blurOnSubmit={false}
      />
      <Text style={styles.errLabel}>{errorLabel}</Text>
    </View>
  );
});

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
