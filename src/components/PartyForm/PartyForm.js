import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

class PartyForm extends Component {
    state = {
        partyName: ""
    }

    partyNameChangedHandler = (val) => {
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
            <View style={styles.formContainer}>
                <TextInput
                    placeholder="Party Name"
                    value={this.state.partyName}
                    onChangeText={this.partyNameChangedHandler}  
                    style={styles.partyInput}         
                />
                <Button 
                    title='Add'
                    style={styles.partyButton} 
                    onPress={this.partySubmitHandler} 
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    formContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
        
    },
    partyInput: {
        width: '70%',  
    },
    partyButton: {
        width: "30%"
    }
});

export default PartyForm;