import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

class PartyForm extends Component {
    state = {
        partyName: '',
    }

    partyNameChangeHandler = (val) => {
        this.setState({
            partyName: val
        });
    };

    partySubmitHandler = () => {
        if (this.state.partyName.trim() === "") {
            return;
        }
        this.props.onPartyAdded(this.state.partyName)
    };

    render() {
        return (
            <View>
                <Text style={styles.header}>Create Your Party</Text>
                <TextInput 
                    style={styles.textInput} 
                    value={this.state.partyName} 
                    placeholder="Party Name" 
                    onChangeText={this.partyNameChangeHandler} 
                />
                <Button 
                    title='Share' 
                    onPress={this.partySubmitHandler} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        fontSize: 24,
        color: '#fff',
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: '#199187',
        borderBottomWidth: 1
    },
    textInput: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        color: '#fff',
        borderBottomColor: '#f8f8f8',
        borderBottomWidth: 1,
    }
});

export default PartyForm;