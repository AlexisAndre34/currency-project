import React from 'react';
import { StatusBar } from 'react-native';

import Colors from '../constants/colors';

export default () => (
  <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />  
);