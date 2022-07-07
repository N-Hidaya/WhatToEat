import React from "react";
import {View, Text, ScrollView, StyleSheet} from 'react-native';

export const Instruction = ({instructions}) => {
    return (
        <ScrollView style={styles.scroller}>
            <Text style={styles.heading}>Instructions</Text>
            <View style={styles.div}>
                <Text style={styles.explanation}>{instructions}</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scroller: {
        backgroundColor: 'white',
        height: '100%',
        paddingHorizontal: 20
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 23,
        marginBottom: 10
    },
    div: {
        backgroundColor: 'white',
        height: '100%'
    },
    explanation: {
        color: '#979797',
        fontWeight: 'bold',
        fontSize: 15
    }
})