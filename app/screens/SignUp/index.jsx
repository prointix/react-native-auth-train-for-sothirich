import React, {useState, createRef} from 'react';
import {Keyboard, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Spinner from 'react-native-loading-spinner-overlay';
import {Body} from '../../components/Body';
import {FloatingLabelInput} from '../../components/FloatingLabelInput';
import {Header} from '../../components/Header';
import {SubmitButton} from '../../components/SubmitButton';
import {useAuth} from '../../contexts/auth';
import {COLORS} from '../../theme/Color';

const SignUp = ({navigation}) => {
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const nameRef = createRef();
  const emailRef = createRef();
  const passwordRef = createRef();

  const {register, isLoading} = useAuth();

  const onRegisterPressHandler = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    nameRef.current.focus();
    emailRef.current.focus();
    passwordRef.current.focus();

    if (nameInput.trim().length === 0) {
      nameRef.current.focus();
    } else if (
      emailInput.trim().length === 0 ||
      reg.test(emailInput) === false
    ) {
      emailRef.current.focus();
    } else if (passwordInput.trim().length < 6) {
      passwordRef.current.focus();
    } else {
      register(nameInput, emailInput, passwordInput);
      navigation.navigate('SignIn');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Spinner visible={isLoading} />
      <Header label="Registeration" />
      <Body>
        <FloatingLabelInput
          label="Name"
          ref={nameRef}
          value={nameInput}
          onChangeText={text => setNameInput(text)}
          returnKeyType={'next'}
          onSubmitEditing={() => emailRef.current.focus()}
        />
        <FloatingLabelInput
          label="Email"
          type="email"
          ref={emailRef}
          autoCapitalize="none"
          value={emailInput}
          onChangeText={text => setEmailInput(text)}
          returnKeyType={'next'}
          onSubmitEditing={() => passwordRef.current.focus()}
        />
        <FloatingLabelInput
          label="Password"
          type="password"
          ref={passwordRef}
          autoCapitalize="none"
          value={passwordInput}
          returnKeyType={'done'}
          onSubmitEditing={() => Keyboard.dismiss()}
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
