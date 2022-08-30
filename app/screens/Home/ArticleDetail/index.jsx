import moment from 'moment';
import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, View, Text, ScrollView} from 'react-native';
import {getArticleDetails} from '../../../services/auth';
import {COLORS} from '../../../theme/Color';

const ArticleDetail = ({navigation, route}) => {
  const {itemId} = route.params;
  const [article, setArticle] = useState({});

  useEffect(() => {
    getArticleDetails(itemId)
      .then(data => {
        setArticle(data);
      })
      .catch();
  }, []);

  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.headerText}>{article.title}</Text>
          <Text style={styles.time}>{moment(article.createdAt).format('llll')}</Text>
          <Text style={styles.text}>{article.body}</Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 40,
  },
  headerText: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
  time: {
    color: 'black',
    fontSize: 12,
    paddingBottom: 20,
  },
  text: {
    color: 'black',
  },
});

export default ArticleDetail;
