import React, {useState, useRef} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {Body} from '../../components/Body';
import {FloatingLabelInput} from '../../components/FloatingLabelInput';
import {Header} from '../../components/Header';
import {SubmitButton} from '../../components/SubmitButton';
import {useAuth} from '../../contexts/auth';
import {loginUser} from '../../services/auth';
import {COLORS} from '../../theme/Color';

const SignIn = ({navigation}) => {
  const [isLoading, setLoading] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const emailRef = useRef();
  const passwordRef = useRef();

  const {login} = useAuth();

  const onLoginPressHandler = async () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    emailRef.current.focus();
    passwordRef.current.focus();

    if (emailInput.trim().length === 0 || reg.test(emailInput) === false) {
      emailRef.current.focus();
    } else if (passwordInput.trim().length < 6) {
      passwordRef.current.focus();
    } else {
      setLoading(true);
      const data = await loginUser(emailInput, passwordInput);
      await login(data.accessToken, data.user);
      setLoading(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView style={styles.backgroundColor} scrollEnabled={false}>
        <SafeAreaView style={styles.container}>
          <KeyboardAvoidingView behavior={'position'}>
            <Spinner visible={isLoading} />
            <Header label="Login" />
            <Body>
              <FloatingLabelInput
                label="Email"
                type="email"
                ref={emailRef}
                autoCapitalize="none"
                value={emailInput}
                keyboardType={'email-address'}
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
              <SubmitButton label="Login" onPress={onLoginPressHandler} />
              <View style={styles.bottomTextContainer}>
                <Text style={styles.normalText}>New User? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                  <Text style={styles.linkText}>Join Us</Text>
                </TouchableOpacity>
              </View>
            </Body>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  backgroundColor: {
    flex: 1,
    backgroundColor: COLORS.white,
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
