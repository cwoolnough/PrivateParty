import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import DefaultInput from "../UI/DefaultInput/DefaultInput";

const PartyForm = props =>  {
        return (
            <DefaultInput
                placeholder="Party Name"
                value={props.partyName}
                onChangeText={props.onChangeText}
            />
        );
}

export default PartyForm;