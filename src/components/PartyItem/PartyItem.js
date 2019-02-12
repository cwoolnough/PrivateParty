import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const partyItem = (props) => {
    return (
        <TouchableOpacity onPress={props.onPartyPressed}>
            <View style={styles.partyItem}>
                <Text>{props.partyName}</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    partyItem: {
        width: '100%',
        marginBottom: 5,
        padding: 10,
        backgroundColor: '#36485f',
        flexDirection: "row",
        alignItems: "center"
    }
}); 

export default partyItem;