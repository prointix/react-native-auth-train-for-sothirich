import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../../theme/Color';

export const ListArticle = props => {
  return (
    <TouchableOpacity style={styles.listContainer} {...props}>
      <View>
        <Text style={styles.bigText}>{props.article.title}</Text>
      </View>
    </TouchableOpacity>
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
