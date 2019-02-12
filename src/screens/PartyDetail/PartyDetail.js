import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Platform, Dimensions } from 'react-native';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/Ionicons';
import { deleteParty } from '../../store/actions/index';

class PartyDetail extends Component {
    state = {
        viewMode: "portrait"
    };

    constructor(props) {
        super(props);
        Dimensions.addEventListener("change", this.updateStyles);
    }

    componentWillUnmount() {
        Dimensions.removeEventListener("change", this.updateStyles);
    }

    updateStyles = dims => {
        this.setState({
            viewMode: dims.window.height > 500 ? "portrait" : "landscape"
        });
    };

    partyDeletedHandler = () => {
        this.props.onDeleteParty(this.props.selectedParty.key);
        this.props.navigator.pop()
    }

    render() {
        return (
            <View
                style={[
                    styles.container,
                    this.state.viewMode === "portrait"
                        ? styles.portraitContainer
                        : styles.landscapeContainer
                ]}
            >
                <View style={styles.subContainer}>
                    <View>
                        <Text style={styles.partyName}>
                            {this.props.selectedParty.name}
                        </Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={this.partyDeletedHandler}>
                            <View style={styles.deleteButton}>
                                <Icon
                                    size={30}
                                    name={Platform.OS === "android" ? "md-trash" : "ios-trash"}
                                    color="red"
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
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
    },
    deleteButton: {
      alignItems: "center"
    },
    subContainer: {
      flex: 1
    }
});

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteParty: (key) => dispatch(deleteParty(key))
    }
}

export default connect(null, mapDispatchToProps)(PartyDetail);