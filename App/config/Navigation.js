import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Colors from '../constants/colors';

import Home from '../screens/Home';
import Options from '../screens/Options';
import CurrencyList from '../screens/CurrencyList';

const MainStack = createStackNavigator();
const MainStackScreen = () => (
  <MainStack.Navigator /*initialRouteName="CurrencyList" */>
    <MainStack.Screen
      name="Home"
      component={Home}
      options={{headerShown: false}}
    />
    <MainStack.Screen name="Options" component={Options} />
  </MainStack.Navigator>
);

const ModalStack = createStackNavigator();
const ModalStackScreen = () => (
  <ModalStack.Navigator mode="modal">
    <ModalStack.Screen
      name="Main"
      component={MainStackScreen}
      options={{headerShown: false}}
    />
    <ModalStack.Screen
      name="CurrencyList"
      component={CurrencyList}
      options={({route, navigation}) => ({
        title: route.params && route.params.title,
        headerLeft: null,
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.pop()}>
            <Icon name="cross" size={30} color={Colors.blue} />
          </TouchableOpacity>
        ),
      })}
    />
  </ModalStack.Navigator>
);

export default () => (
  <NavigationContainer>
    <ModalStackScreen />
  </NavigationContainer>
);
