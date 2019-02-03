import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

import DefaultInput from "../UI/DefaultInput/DefaultInput";

const placeInput = (props) => {
  return (
    <DefaultInput 
      placeholder="Place Name"
      value={props.placeData.value}
      valid={props.placeData.valid}
      touched={props.placeData.touched}
      onChangeText={props.onChangeText}
    />
  )
}

export default placeInput;