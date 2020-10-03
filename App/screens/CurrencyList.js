import React from 'react';
import {StatusBar, FlatList, View, StyleSheet} from 'react-native';

import Colors from '../constants/colors';
import currencies from '../data/currencies.json';
import {RowItem, RowSeparator} from '../components/RowItem';
import Icon from 'react-native-vector-icons/Entypo';

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.blue,
  },
});

export default ({navigation, route = {}}) => {
  const params = route.params || {};

  return (
    <View style={{backgroundColor: Colors.white}}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />
      <FlatList
        data={currencies}
        renderItem={({item}) => {
          const selected = params.activeCurrency === item;
          return (
            <RowItem
              text={item}
              rightIcon={
                selected && (
                  <View style={styles.icon}>
                    <Icon name="check" size={20} color={Colors.white} />
                  </View>
                )
              }
              onPress={() => navigation.pop()}
            />
          );
        }}
        keyExtractor={(item) => item}
        ItemSeparatorComponent={() => <RowSeparator />}
      />
    </View>
  );
};
