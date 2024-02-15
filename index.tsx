import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Title = ({text}) => {
    return (
        <View>
            <Text style={styles.title}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
      fontSize: 50,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center',
      marginTop: 50,
    },
});

export default Title;