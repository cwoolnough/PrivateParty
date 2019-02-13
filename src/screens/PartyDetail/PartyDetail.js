import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Platform, Dimensions, TextInput } from 'react-native';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/Ionicons';
import { deleteParty } from '../../store/actions/index';
import defaultInput from '../../components/UI/DefaultInput/DefaultInput';

class PartyDetail extends Component {
    state = {
        viewMode: "portrait",
        secret: false,
        secretPassword: ''
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

    secretPasswordText = (value) => {
        console.log(value)
        this.setState({
            secretPassword: value
        })
    }

    onSubmitSecret = () => {
        this.state.secretPassword === this.props.selectedParty.secret ?
            this.setState({
                secret: true
            })
        :
        alert("Wrong Password, please try again!")
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
            {this.state.secret === true ? 
                <View>
                    <View>
                        <Text style={styles.partyName}>{this.props.selectedParty.name}</Text>
                        <Text style={styles.partyLocation}>{this.props.selectedParty.location}</Text>
                        <Text style={styles.partyDate}>{this.props.selectedParty.date}</Text>
                        <Text style={styles.partyTime}>{this.props.selectedParty.time}</Text>
                        <Text style={styles.partySecret}>{this.props.selectedParty.secret}</Text>
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
                : 
                <View>
                    <TextInput 
                        onChangeText={this.secretPasswordText} 
                    />
                    <View>
                        <Button title="Enter Party Secret" onPress={this.onSubmitSecret} />
                    </View>
                </View>}
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
    partyLocation: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 28
    },
    partyDate: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 28
    },
    partyTime: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 28
    },
    deleteButton: {
      alignItems: "center"
    }
});

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteParty: (key) => dispatch(deleteParty(key))
    }
}

export default connect(null, mapDispatchToProps)(PartyDetail);