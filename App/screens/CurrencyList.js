import React from 'react';
import {StatusBar, FlatList, View} from 'react-native';

import Colors from '../constants/colors';
import currencies from '../data/currencies.json';
import {RowItem, RowSeparator} from '../components/RowItem';

export default ({ navigation }) => {

  return (
    <View style={{backgroundColor: Colors.white}}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />
      <FlatList
        data={currencies}
        renderItem={({item}) => {
          return <RowItem text={item} onPress={() => navigation.pop()} />;
        }}
        keyExtractor={(item) => item}
        ItemSeparatorComponent={() => <RowSeparator />}
      />
    </View>
  );
};
