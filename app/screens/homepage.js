import React from 'react';
import {View, StyleSheet, Text } from 'react-native';

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