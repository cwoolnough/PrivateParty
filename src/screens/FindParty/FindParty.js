import React, { Component } from 'react';
import { View, Text  } from 'react-native';
import { connect } from 'react-redux';

import PartyList from '../../components/PartyList/PartyList';

class FindPartyScreen extends Component {
    partySelectedHandler = (key) => {
        const selParty = this.props.parties.find(party => {
            return party.key === key;
        })
        this.props.navigator.push({
            screen: "private-party.partyDetailScreen",
            title: selParty.name,
            passProps: {
                selectedParty: selParty
            }
        })
    }

    render() {
        return (
            <View>
                <PartyList parties={this.props.parties} onPartySelected={this.partySelectedHandler} />
            </View> 
        )
    }
}

const mapStateToProps = (state) => {
    return {
        parties: state.parties.parties
    };
}; 

export default connect(mapStateToProps)(FindPartyScreen);