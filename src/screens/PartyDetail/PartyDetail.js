import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/Ionicons';
import { deleteParty } from '../../store/actions/index';

class PartyDetail extends Component {
    partyDeletedHandler = () => {
        this.props.onDeleteParty(this.props.selectedParty.key);
        this.props.navigator.pop()
    }

    render() {
        <View style={styles.container}>
            <View>
                <Text style={styles.partyName}>{this.props.selectedParty.name}</Text>
            </View>
            <View>
                <TouchableOpacity onPress={this.partyDeletedHandler}>
                    <Icon size={20} name='ios-trash' />
                </TouchableOpacity>
            </View>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
      margin: 30,
    },
    partyName: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 28
    }
});

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteParty: (key) => dispatch(deleteParty(key))
    }
}

export default connect(null, mapDispatchToProps)(PartyDetail);