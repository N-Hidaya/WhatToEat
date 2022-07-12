import React from 'react';
import {View, StyleSheet } from 'react-native';
import {Text} from 'galio-framework';

export const About = () => {
    return (
        <View style={styles.banner}>
            <Text h5 style={styles.words}>Having trouble thinking about WhatToEat?</Text>
        </View>
    )
}



const styles = StyleSheet.create({
    banner: {
        alignItems: 'center',
        backgroundColor: '#EA4C89',
        shadowOpacity: 20
    },
    words: {
        textAlign: 'center',
        color: '#FFFFFF',
        padding: 30
    }
})