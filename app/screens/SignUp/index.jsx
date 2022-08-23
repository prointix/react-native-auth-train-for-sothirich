import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Body} from '../../components/Body';
import {FloatingLabelInput} from '../../components/FloatingLabelInput';
import {Header} from '../../components/Header';
import {SubmitButton} from '../../components/SubmitButton';
import {COLORS} from '../../theme/Color';

const SignUp = ({navigation}) => {
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const onRegisterPressHandler = () => {
    console.log('hello');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header label="Registeration" />
      <Body>
        <FloatingLabelInput
          label="Name"
          value={nameInput}
          onChangeText={text => setNameInput(text)}
        />
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
        <SubmitButton label="Register" onPress={onRegisterPressHandler} />
        <View style={styles.bottomTextContainer}>
          <Text style={styles.normalText}>Already Have Account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.linkText}>Login</Text>
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

export default SignUp;
