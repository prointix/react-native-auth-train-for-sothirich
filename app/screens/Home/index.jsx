import React, {useContext, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {Body} from '../../components/Body';
import {Header} from '../../components/Header';
import {SubmitButton} from '../../components/SubmitButton';
import {AuthContext} from '../../contexts/auth';
import {COLORS} from '../../theme/Color';

const Home = ({navigation}) => {
  const {logout, isLoading, userInfo} = useContext(AuthContext);

  const userName = userInfo.user?.name;

  return (
    <SafeAreaView style={styles.container}>
      <Spinner visible={isLoading} />
      <Header label={`Welcome ${userName}`} />
      <Body>
        <View style={styles.bottomTextContainer}>
          <Text style={styles.normalText}>Nothing to see yet</Text>
        </View>
        <SubmitButton label="Logout" onPress={logout} />
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
});

export default Home;
