import React from 'react';
import {View, StyleSheet, Text } from 'react-native';

export const About = () => {
    return (
        <View style={styles.banner}>
            <Text h5 style={styles.words}> WhatToEat? </Text>
        </View>
    )
}



const styles = StyleSheet.create({
    banner: {
        alignItems: 'center',
        backgroundColor: '#FFC7DF',
        shadowOpacity: 40

    },
    words: {
        textAlign: 'center',
        color: '#FFFFFF',
        padding: 10,
        fontSize: 20,
        textShadowColor: "gray",
        textShadowRadius: 20,
    }
})