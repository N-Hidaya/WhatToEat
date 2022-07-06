import React from 'react';
import {View, StyleSheet, TouchableOpacity, Linking, Image } from 'react-native';
import {Text} from 'galio-framework';

export const About = () => {
    return (
        <View style={styles.banner}>
            <Text>Having trouble thinking about WhatToEat?</Text>
        </View>
    )
}



const styles = StyleSheet.create({
    banner: {
        flex: 1,
        backgroundColor: '#EA4C89'
    }
})