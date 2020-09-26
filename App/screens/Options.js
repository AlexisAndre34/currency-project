import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, Linking, Alert} from 'react-native';
import Colors from '../constants/colors';
import Icon from 'react-native-vector-icons/Entypo';
// components
import {RowItem, RowSeparator} from '../components/RowItem';

const styles = StyleSheet.create({
    separator: {
        backgroundColor: Colors.border,
        height: StyleSheet.hairlineWidth,
        marginLeft: 20
    }
})

const openUrl = (url) => {
    return Linking.openURL(url).catch(() => {
        Alert.alert('Sorry, something went wrong', 'Please try again later.');
    });
};

export default () => {
  return (
    <SafeAreaView style={{flex: 1}}>
        <ScrollView>
            <RowItem
                text="Themes"
                onPress={() => openUrl('fgjf.fkg')}
                rightIcon={
                    <Icon name="chevron-right" size={20} color={Colors.blue} />
                }
            />

            <RowSeparator />

            <RowItem
                text="React Native Basics"
                onPress={() => openUrl('https://reactnative.dev/')}
                rightIcon={
                    <Icon name="export" size={20} color={Colors.blue} />
                }
            />
            
            <RowSeparator />

            <RowItem
                text="React Native by Example"
                onPress={() => openUrl('https://reactnativebyexample.com/')}
                rightIcon={
                    <Icon name="export" size={20} color={Colors.blue} />
                }
            />

        </ScrollView>
    </SafeAreaView>
  );
};
