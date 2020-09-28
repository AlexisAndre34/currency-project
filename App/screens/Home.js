import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Colors from '../constants/colors';
import {format} from 'date-fns';
import Icon from 'react-native-vector-icons/Entypo';
import {SafeAreaView} from 'react-native-safe-area-context';

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
		justifyContent: 'center'
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
		marginHorizontal: 10
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

export default ({ navigation }) => {
  const baseCurrency = 'USD';
  const quoteCurrency = 'EUR';
  const conversionRate = 0.8345;
  const date = new Date();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.blue} />
      <SafeAreaView style={styles.header}>
				<TouchableOpacity onPress={() => navigation.push("Options")}>
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
          value="123"
          onButtonPress={() => navigation.push('CurrencyList')}
          keyboardType="numeric"
        />

        <ConversionInput
          text={quoteCurrency}
          value="123"
          onButtonPress={() => navigation.push('CurrencyList')}
          onChangeText={(text) => console.log('text: ', text)}
          editable={false}
        />

        <Text style={styles.text}>
          {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${format(
            date,
            'MMM do, yyyy',
          )}.`}
        </Text>

        <Button text="Reverse Currencies" onPress={() => alert('todo!')} />
      </View>
    </View>
  );
};
