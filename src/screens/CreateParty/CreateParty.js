import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import PartyForm from '../../components/PartyForm/PartyForm';
import { addParty } from '../../store/actions/index'

class CreatePartyScreen extends Component {
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
    }

    partyAddedHandler = (partyName) => {
        this.props.onAddParty(partyName)
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
        onAddParty: (partyName) => dispatch(addParty(partyName))
    };
};

export default connect(null, mapDispatchToProps)(CreatePartyScreen)