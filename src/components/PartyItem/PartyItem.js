import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const PartyItem = (props) => {
    console.log(props)
    return (
        <TouchableOpacity onPress={props.onItemPressed}>
            <View style={styles.partyItem}>
                <Text>{props.partyName}</Text>
                <Text>{props.partyLocation}</Text>
                <Text>{props.partyDate}</Text>
                <Text>{props.partyTime}</Text>
                <Text>{props.partySecret}</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    partyItem: {
        width: '100%',
        marginBottom: 5,
        padding: 10,
        backgroundColor: 'grey',
        flexDirection: 'row',
        alignItems: 'center', 
        color: "black"
    }
}); 


export default PartyItem