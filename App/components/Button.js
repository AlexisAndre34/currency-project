import React from 'react';
import { TouchableOpacity, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Colors from '../constants/colors';

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    text: {
        marginLeft: 10,
        color: Colors.white,
        fontSize: 16
    }
});

export const Button = ({onPress, text}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Icon name="swap-horizontal-bold" size={25} color={Colors.white} />
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
};