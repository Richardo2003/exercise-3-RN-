import React from "react";
import {TextInput, StyleSheet} from "react-native";

const Input = ({placeholder}) => {
    return (
        <TextInput placeholder={placeholder} style={styles.inputUsername}/>

    );
};


const styles = StyleSheet.create({
    inputUsername: {
        borderColor: 'white',
        borderWidth: 1,
        margin: 10,
        borderRadius: 10,
        padding: 10,
        },
});

export default Input
