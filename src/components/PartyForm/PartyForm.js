import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import DefaultInput from "../UI/DefaultInput/DefaultInput";

const PartyForm = (props) => {
    return (
        <View style={styles.formInput}>
            <DefaultInput
                placeholder="Party Name"
                value={props.partyName}
                onChangeText={(val) => props.onChangeText("partyName", val)}
            />
            <DefaultInput
                placeholder="Location"
                value={props.partyLocation}
                onChangeText={(val) => props.onChangeText("partyLocation", val)}
            />
            <DefaultInput
                placeholder="Date"
                value={props.partyDate}
                onChangeText={(val) => props.onChangeText("partyDate", val)}
            />
            <DefaultInput
                placeholder="Time"
                value={props.partyTime}
                onChangeText={(val) => props.onChangeText("partyTime", val)}
            />
            <DefaultInput
                placeholder="Secret"
                value={props.partySecret}
                onChangeText={(val) => props.onChangeText("partySecret", val)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    formInput: {
        width: "80%",
        // borderColor: "blue",
        // borderWidth: 1,
        // // flex: 1,
        
        
    }
})

export default PartyForm;