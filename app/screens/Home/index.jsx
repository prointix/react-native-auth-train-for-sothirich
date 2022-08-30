import React, {useState, useEffect} from 'react';
import {
  FlatList,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import {Body} from '../../components/Body';
import {Header} from '../../components/Header';
import {useAuth} from '../../contexts/auth';
import {getAllArticles} from '../../services/auth';
import {COLORS} from '../../theme/Color';
import {ListArticle} from './ListArticle';

const Home = ({navigation}) => {
  const {user} = useAuth();
  const [refreshing, setRefreshing] = useState(false);
  const [article, setArticle] = useState({});

  useEffect(() => {
    getAllArticles().then(data => {
      setArticle(data);
    });
  }, []);

  const onPressHandler = itemId => {
    navigation.navigate('ArticleDetail', {itemId});
  };

  const onRefresh = () => {
    setRefreshing(true);
    setRefreshing(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header label={`Welcome ${user?.name}`}></Header>
      <Body>
        <View style={{flex: 1}}>
          <FlatList
            data={article.data}
            renderItem={({item}) => (
              <ListArticle
                article={item}
                onPress={() => onPressHandler(item.id)}
              />
            )}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          />
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
});

export default Home;
