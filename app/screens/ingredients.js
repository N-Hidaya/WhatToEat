import React from "react";
import {View, Text, ScrollView, StyleSheet} from "react-native";

export const Ingredients = ({ingredients}) => {
    return (
        <ScrollView style={styles.container}>
            {ingredients.map((data, key) => {
                return (
                    <View style={styles.keyView} key={key}>
                        <View style={styles.innerView}>
                            <Text style={styles.wordline}>{'* ' + data.strIngredient}</Text>
                        </View>
                        <View>
                            <Text style={styles.wordline}>{data.strMeasure}</Text>
                        </View>
                    </View>
                )
            })}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 20,
    },
    keyView: {
        flexDirection: 'row'
    },
    innerView: {
        flex: 1,
        marginVertical: 5
    },
    wordline: {
        color: '#979797',
        fontWeight: 'bold',
        fontSize: 15,
    }
})