import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../../theme/Color';

export const ListArticle = ({article}) => {
  return (
    <View style={styles.listContainer}>
      <View>
        <Text style={styles.bigText}>{article.title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 7,
    marginBottom: 9,
    elevation: 3,
  },
  bigText: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
  },
});
