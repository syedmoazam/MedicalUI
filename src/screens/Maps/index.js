import React, { Fragment } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View, Dimensions, TextInput, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Map() {
    return (
        <>
            <StatusBar translucent backgroundColor={'transparent'} />
            <View style={styles.container}>
                {/* <View style={styles.location}>
                    <MaterialCommunityIcons style={{ marginStart: 10 }} name="map-marker-outline" size={28} color="#2A2AC0" />
                    <TextInput placeholder='Your Location' style={styles.input} onChangeText={(e) => setText(e)} />
                </View> */}
                    <MapView style={styles.map} />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    location: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        justifyContent: 'flex-start',
        width: 313,
        marginVertical: 20,
        borderRadius: 10
    },
    input: {
        height: 30,
        margin: 12,
        fontSize: 16,
        width: 250
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});
