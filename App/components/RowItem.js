import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import Colors from '../constants/colors';

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 16,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 16,
        color: Colors.text
    },
    separator: {
        backgroundColor: Colors.border,
        height: StyleSheet.hairlineWidth,
        marginLeft: 20
    }
})

export const RowItem = ({ rightIcon, text, onPress}) => {
    return (
        <TouchableOpacity style={styles.row} onPress={onPress}>
          <Text style={styles.text}>{text}</Text>
          {rightIcon}
        </TouchableOpacity>
    );
}

export const RowSeparator = () => {
    return (
        <View style={styles.separator}></View>
    );
}