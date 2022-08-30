import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Body} from '../../components/Body';
import {Header} from '../../components/Header';
import {SubmitButton} from '../../components/SubmitButton';
import {useAuth} from '../../contexts/auth';
import {COLORS} from '../../theme/Color';
import {ListArticle} from './ListArticle';

const Home = ({navigation}) => {
  const {logout, user, article} = useAuth();

  return (
    <SafeAreaView style={styles.container}>
      <Header label={`Welcome ${user?.name}`}></Header>
      <Body>
        <View style={{flex: 1, paddingBottom: 40}}>
          <FlatList
            data={article.data}
            renderItem={({item}) => <ListArticle article={item} />}
          />
        </View>
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
  button: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    alignSelf: 'center',
  },
});

export default Home;
