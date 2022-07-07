import React from "react";
import {
  View,
  Text,
  Modal,
  Alert,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

export const Loading = ({modalVisible}) => {
    return (
        <View>
            <Modal animationType="slide" transparent={false}
                visible={modalVisible} onRequestClose={() => {
                    Alert.alert('Modal has been closed')
                }}>
                <View style={styles.centered}>
                    <View style={styles.modalView}>
                        <ActivityIndicator size="small" color="#FF8A00" />
                        <Text style={styles.wording}>Loading...</Text>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    wording: {
        color: 'pink',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 15,
    }
});