import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Body} from '../../components/Body';
import {Header} from '../../components/Header';
import {SubmitButton} from '../../components/SubmitButton';
import {useAuth} from '../../contexts/auth';
import {COLORS} from '../../theme/Color';

const Home = ({navigation}) => {
  const {logout, user} = useAuth();

  return (
    <SafeAreaView style={styles.container}>
      <Header label={`Welcome ${user?.name}`} />
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
