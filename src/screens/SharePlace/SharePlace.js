import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import { addPlace } from '../../store/actions/index';
import PlaceInput from '../../components/PlaceInput/PlaceInput';
import MainText from '../../components/UI/MainText/MainText';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import PickImage from '../../components/PickImage/PickImage';
import PickLocation from '../../components/PickLocation/PickLocation';

class SharePlaceScreen extends Component {
    static navigatorStyle = {
        navBarButtonColor: "orange"
    }
    
    state = {
        placeName: ''
    }

    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent)
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

    placeNameChangedHandler = (val) => {
        this.setState({
            placeName: val
        });
    }

    placeAddedHandler = () => {
        if (this.state.placeName.trim() !== "") {
            this.props.onAddPlace(this.state.placeName)
        }   
    };

    render() {
        return (
        <ScrollView>
            <View style={styles.container}>
              <MainText>
                <HeadingText>Share a place</HeadingText>
              </MainText>
              <PickImage />
              <PickLocation />  
              <PlaceInput placeName={this.state.placeName} onChangeText={this.placeNameChangedHandler} />
              <View style={styles.button}>
                <Button title="Share the Place" onPress={this.placeAddedHandler}/>
              </View>
            </View>
          </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    placeholder: {
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "#eee",
        width: "80%",
        height: 150
    },
    button: {
        margin: 8
    }
})

const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (placeName) => dispatch(addPlace(placeName))
    };
};

export default connect(null, mapDispatchToProps)(SharePlaceScreen);