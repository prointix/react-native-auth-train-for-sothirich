import moment from 'moment';
import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, ScrollView} from 'react-native';
import {COLORS} from '../../../theme/Color';

const ArticleDetail = ({navigation, route}) => {
  const {item} = route.params;
  // navigation.setOptions({title: `${item.title}`});

  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.headerText}>{item.title}</Text>
          <Text style={styles.time}>
            {moment(item.createdAt).format('llll')}
          </Text>
          <Text style={styles.text}>{item.body}</Text>
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
