import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Title2 = ({text2}) => {
    return (
        <View>
            <Text style={styles.title}>{text2}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
      fontSize: 15,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'left',
      marginTop: 20,
    },
});

export default Title2;