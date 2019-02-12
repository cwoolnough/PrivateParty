import React, { Component } from 'react';
import { View, Text  } from 'react-native';
import { connect } from 'react-redux';

import PartyList from '../../components/PartyList/PartyList';

class FindPartyScreen extends Component {
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

    partySelectedHandler = (key) => {
        const selParty = this.props.parties.find(party => {
            return party.key === key;
        });
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
                <PartyList 
                    parties={this.props.parties} 
                    onPartySelected={this.partySelectedHandler} 
                />
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