import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Dimensions, TextInput, StatusBar, TouchableOpacity, Text } from 'react-native';
import { Image as Img } from '../../components';
import { marker, mapMarker } from '../../assets/images/imagesSVGs';

export default function Map() {
    return (
        <>
            <StatusBar translucent backgroundColor={'transparent'} />
            {/* <View style={styles.container}> */}
            {/* <View style={styles.location}>
                    <MaterialCommunityIcons style={{ marginStart: 10 }} name="map-marker-outline" size={28} color="#2A2AC0" />
                    <TextInput placeholder='Your Location' style={styles.input} onChangeText={(e) => setText(e)} />
                </View> */}
            <View style={styles.bgWhite}>
                <Img image={marker} />
                <TextInput style={{ paddingHorizontal: 10 }} placeholder="Your location" />
            </View>
            <MapView initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }} style={styles.map}>
                <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
                    pinColor={"purple"} // any color
                    title={"title"}
                    description={"description"} image={require('../../assets/images/mapMarker.png')}/>
            </MapView>
            <View style={styles.btn}>
                <TouchableOpacity>
                    <Text style={{
                        backgroundColor: '#2A2AC0',
                        color: '#FFFFFF',
                        marginHorizontal: 20,
                        width: 350,
                        textAlign: 'center',
                        paddingTop: 11,
                        paddingBottom: 9,
                        borderRadius: 10
                    }}>Confirm</Text>
                </TouchableOpacity>
            </View>
            {/* </View> */}
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
    bgWhite: {
        position: 'absolute',
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        top: 50,
        width: 350,
        paddingTop: 11,
        paddingBottom: 9,
        paddingHorizontal: 10,
        borderRadius: 10,
        zIndex: 10,
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height + 42,
    },
    btn: {
        position: 'absolute',
        zIndex: 10,
        top: 790,
    }
});

