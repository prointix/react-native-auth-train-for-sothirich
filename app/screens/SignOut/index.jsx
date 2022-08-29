import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Body} from '../../components/Body';
import {Header} from '../../components/Header';
import {SubmitButton} from '../../components/SubmitButton';
import {useAuth} from '../../contexts/auth';
import {COLORS} from '../../theme/Color';

const SignOut = () => {
  const {logout, user} = useAuth();

  return (
    <SafeAreaView style={styles.container}>
      <Header label={`Welcome ${user?.name}`}></Header>
      <Body>
        <View style={styles.button}>
          <SubmitButton label="Logout" onPress={logout} />
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
  button: {
    width: '100%',
  },
});

export default SignOut;
