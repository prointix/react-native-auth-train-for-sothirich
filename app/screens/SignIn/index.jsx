import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Body} from '../../components/Body';
import {FloatingLabelInput} from '../../components/FloatingLabelInput';
import {Header} from '../../components/Header';
import {SubmitButton} from '../../components/SubmitButton';
import {COLORS} from '../../theme/Color';

const SignIn = ({navigation}) => {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const onLoginPressHandler = () => {
    console.log('hello');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header label="Login" />
      <Body>
        <FloatingLabelInput
          label="Email"
          value={emailInput}
          onChangeText={text => setEmailInput(text)}
        />
        <FloatingLabelInput
          label="Password"
          value={passwordInput}
          onChangeText={text => setPasswordInput(text)}
          secureTextEntry={true}
        />
        <SubmitButton label="Login" onPress={onLoginPressHandler} />
        <View style={styles.bottomTextContainer}>
          <Text style={styles.normalText}>New User? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.linkText}>Join Us</Text>
          </TouchableOpacity>
        </View>
      </Body>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  bottomTextContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginVertical: 10,
  },
  normalText: {
    color: COLORS.black,
    fontWeight: 'bold',
    fontSize: 15,
  },
  linkText: {
    color: COLORS.primary,
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default SignIn;
