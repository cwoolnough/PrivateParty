import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const PartyItem = (props) => {
    return (
        <TouchableOpacity onPress={props.onItemPressed}>
            <View style={styles.partyItem}>
                <Text>{props.partyName}</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    partyItem: {
        borderColor: 'black',
        borderWidth: 1,
        width: '100%',
        marginBottom: 5,
        padding: 10,
        backgroundColor: '#eee',
        flexDirection: 'row',
        alignItems: 'center', 
    }
}); 


export default PartyItem