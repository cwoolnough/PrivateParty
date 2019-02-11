import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import PartyForm from '../../components/PartyForm/PartyForm';
import { addParty } from '../../store/actions/index'

class CreatePartyScreen extends Component {
    partyAddedHandler = (partyName) => {
        this.props.onPartyAdded(partyName)
    }

    render() {
        return (
            <View>
                <PartyForm onPartyAdded={this.partyAddedHandler} />
            </View>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (partyName) => 
            dispatch(addPlace(partyName)),
    };
};

export default connect(null, mapDispatchToProps)(CreatePartyScreen)