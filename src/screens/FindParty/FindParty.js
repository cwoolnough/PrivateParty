import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet  } from 'react-native';
import { connect } from 'react-redux';

import PartyList from '../../components/PartyList/PartyList';

class FindPartyScreen extends Component {
    static navigatorStyle = {
        navBarButtonColor: "blue"
    };

    state = {
        partiesLoaded: false,
        removeAnimation: new Animated.Value(1),
        partiesAnimation: new Animated.Value(0)
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
    }

    partiesLoadedHandler = () => {
        Animated.timing(this.state.partiesAnimation, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true
        }).start();
    }

    partiesSearchHandler = () => {
        Animated.timing(this.state.removeAnimation, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true
        }).start(() => {
            this.setState({
                partiesLoaded: true
            });
            this.partiesLoadedHandler();
        });
    }

    itemSelectedHandler = (key) => {
        const selParty = this.props.parties.find(party => {
            return party.key === key;
        });
        this.props.navigator.push({
            screen: "private-party.PartyDetailScreen",
            title: selParty.name,
            passProps: {
                selectedParty: selParty
            }
        })
    }

    render() {
        let content = (
            <Animated.View
                style={{
                    opacity: this.state.removeAnimation,
                    transform: [
                        {
                            scale: this.state.removeAnimation.interpolate({
                                inputRange: [0, 1],
                                outputRange: [12, 1]
                            })
                        }
                    ]
                }}
            >
                <TouchableOpacity onPress={this.partiesSearchHandler}>
                    <View style={styles.searchButton}>
                        <Text styles={styles.searchButtonText}>Discover Parties</Text>
                    </View>
                </TouchableOpacity>
            </Animated.View>
        );

        if (this.state.partiesLoaded) {
            content = (
                <Animated.View
                    style={{
                        opacity: this.state.partiesAnimation
                    }}
                >
                    <PartyList 
                        parties={this.props.parties} 
                        onItemSelected={this.itemSelectedHandler}  
                    />
                </Animated.View>
            );
        }
        return (
            <View style={this.state.partyLoaded ? null : styles.buttonContainer}>
                {content}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    searchButton: {
        borderColor: "blue",
        borderWidth: 3,
        borderRadius: 50, 
        padding: 20  
    },
    searchButtonText: {
        color: "blue",
        fontWeight: "bold",
        fontSize: 26
    }
})

const mapStateToProps = (state) => {
    return {
        parties: state.parties.parties
    };
}; 

export default connect(mapStateToProps)(FindPartyScreen);