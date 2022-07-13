import React from "react";
import {View, Image, StyleSheet} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";



export const MealImage = ({img}) => {

    //const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image style={styles.picture} source={{uri: img,}} />
           {/*} <View style={styles.coverage}>
                <TouchableOpacity style={styles.itemdesign}
                    onPress={() => navigation.openDrawer()}>
                    <Icon name="menu" size={36} color="white" />
                </TouchableOpacity>

    </View>*/}
        </View>
    )

};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    picture: {
        width: '100%',
        height: '100%',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
    },
    coverage: {
        position: 'absolute',
        top: 5,
        left: 5,
    },
    itemdesign: {
        backgroundColor: 'pink', //FF8A00
        borderRadius: 8,
    },
})