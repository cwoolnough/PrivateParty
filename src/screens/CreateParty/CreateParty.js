import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { connect } from 'react-redux';

import PartyForm from '../../components/PartyForm/PartyForm';
import { addParty } from '../../store/actions/index'
import MainText from '../../components/UI/MainText/MainText';
import HeadingText from '../../components/UI/HeadingText/HeadingText';

class CreatePartyScreen extends Component {
    state = {
        partyName: ""
    }

    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    onNavigatorEvent = (e) => {
        if (e.type === "NavBarButtonPress") {
            if (e.id === "sideDrawerToggle") {
                this.props.navigator.toggleDrawer({
                    side: "left"
                });
            }
        }
    };

    partyNameChangedHandler = val => {
        this.setState({
            partyName: val
        });
    };

    partyAddedHandler = () => {
        if (this.state.partyName.trim() !== "") {
            this.props.onAddParty(this.state.partyName);
        }    
    };

    render() {
        return (
            <View style={styles.container}>
                <MainText>
                    <HeadingText>Create Your Party</HeadingText>
                </MainText>
                <PartyForm 
                    partyName={this.state.partyName}
                    onChangeText={this.partyNameChangedHandler}
                />
                <View style={styles.button}>
                    <Button title="Share Party" onPress={this.partyAddedHandler} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    button: {
        margin: 8
    }
});

const mapDispatchToProps = dispatch => {
    return {
        onAddParty: (partyName) => dispatch(addParty(partyName))
    };
};

export default connect(null, mapDispatchToProps)(CreatePartyScreen)