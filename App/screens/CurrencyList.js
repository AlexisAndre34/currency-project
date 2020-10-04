import React, { useContext } from 'react';
import {StatusBar, FlatList, View, StyleSheet} from 'react-native';

import Colors from '../constants/colors';
import currencies from '../data/currencies.json';
import {RowItem, RowSeparator} from '../components/RowItem';
import Icon from 'react-native-vector-icons/Entypo';
import {ConversionContext} from "../util/ConversionContext";

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
  const {setBaseCurrency, setQuoteCurrency, baseCurrency, quoteCurrency} = useContext(ConversionContext);

  return (
    <View style={{backgroundColor: Colors.white}}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />
      <FlatList
        data={currencies}
        renderItem={({item}) => {
          let selected = false;
          if (params.isBaseCurrency && item === baseCurrency) {
            selected = true;
          } else if (!params.isBaseCurrency && item === quoteCurrency) {
            selected = true;
          }
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
              onPress={() => {
                  if (params.isBaseCurrency) {
                      setBaseCurrency(item);
                  } else {
                      setQuoteCurrency(item);
                  }
                  navigation.pop();
              }}
            />
          );
        }}
        keyExtractor={(item) => item}
        ItemSeparatorComponent={() => <RowSeparator />}
      />
    </View>
  );
};
