import React from "react";
import YoutubePlayer from "react-native-youtube-iframe";
import { View, Text, StyleSheet } from "react-native";

export const YoutubeDisplayer = ({playerRef, YoutubeID, playing}) => {
    
    return (
        <View style={styles.container}>
            <View style={styles.loader}>
                <Text>Loading...Please Wait...</Text>
            </View>
            <YoutubePlayer ref={playerRef} height={'100%'} width={'100%'}
                videoId={YoutubeID} play={playing} volume={100} playbackRate={1} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    loader: {
        position: 'absolute',
        top: '50%'
    }
})