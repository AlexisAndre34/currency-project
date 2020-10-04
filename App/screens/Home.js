import React, {useState, useContext} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
import Colors from '../constants/colors';
import {format} from 'date-fns';
import Icon from 'react-native-vector-icons/Entypo';
import {SafeAreaView} from 'react-native-safe-area-context';
import { ConversionContext} from "../util/ConversionContext";

// components
import {ConversionInput} from '../components/ConversionInput';
import {Button} from '../components/Button';


const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.blue,
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoBackground: {
    width: screen.width * 0.45,
    height: screen.width * 0.45,
  },
  logo: {
    position: 'absolute',
    width: screen.width * 0.25,
    height: screen.width * 0.25,
  },
  header: {
    alignItems: 'flex-end',
    marginHorizontal: 10,
  },
  textHeader: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 20,
    textAlign: 'center',
  },
  text: {
    color: Colors.white,
    marginVertical: 20,
    textAlign: 'center',
  },
});

export default ({navigation}) => {

  const [value, setValue] = useState('100');
  const conversionRate = 0.8345;
  const date = new Date();
  const { baseCurrency, quoteCurrency, swapCurrencies } = useContext(ConversionContext);


  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.blue} />
      <SafeAreaView style={styles.header}>
        <TouchableOpacity onPress={() => navigation.push('Options')}>
          <Icon name="cog" size={32} color={Colors.white} />
        </TouchableOpacity>
      </SafeAreaView>
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/images/background.png')}
            style={styles.logoBackground}
            resizeMode="contain"
          />
          <Image
            source={require('../assets/images/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.textHeader}>Currency Converter</Text>

        <ConversionInput
          text={baseCurrency}
          value={value}
          onButtonPress={() =>
            navigation.push('CurrencyList', {
              title: 'Base Currency',
              isBaseCurrency: true
            })
          }
          onChangeText={(text) => setValue(text)}
          keyboardType="numeric"
        />

        <ConversionInput
          text={quoteCurrency}
          value={value && `${(parseFloat(value) * conversionRate).toFixed(2)}`}
          onButtonPress={() =>
            navigation.push('CurrencyList', {
              title: 'Quote Currency',
              isBaseCurrency: false
            })
          }
          editable={false}
        />

        <Text style={styles.text}>
          {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${format(
            date,
            'MMM do, yyyy',
          )}.`}
        </Text>

        <Button text="Reverse Currencies" onPress={() => swapCurrencies()} />
      </View>
    </View>
  );
};
