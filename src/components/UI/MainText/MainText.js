import React from 'react';
import { Text, StyleSheet } from 'react-native';

const mainText = (props) => {
    return (
        <Text style={styles.mainText}>{props.children}</Text>
    )   
};

const styles = StyleSheet.create({
    mainText: {
        color: "#ffff",
        backgroundColor: "transparent"
    }
})

export default mainText;
