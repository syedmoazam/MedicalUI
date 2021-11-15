import React, { useState } from 'react';
import { Text, View, StyleSheet, StatusBar, TouchableOpacity, TextInput } from 'react-native';
import { logoSVG } from '../../assets/images/imagesSVGs';
import { Image as Img } from '../../components';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Location({ navigation }) {
    const [text, setText] = useState('');
    return (
        <>
            <StatusBar translucent backgroundColor={'transparent'} />
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Img image={logoSVG} />
                    <View style={styles.logoTextView}>
                        <Text style={styles.logoTextBold}>Medical</Text>
                        <Text style={styles.logoText}>App</Text>
                    </View>
                </View>
                <View style={styles.content}>
                    <Text style={styles.mobileHeading}>Location</Text>
                    <Text style={styles.mobileInfo}>Please enter your location:</Text>
                    {/* <Text>location</Text> */}
                    <View style={styles.location}>
                        <MaterialCommunityIcons style={{ marginStart: 10 }} name="map-marker-outline" size={28} color="#2A2AC0" />
                        <TextInput placeholder='Your Location' style={styles.input} onChangeText={(e) => setText(e)} />
                    </View>
                    <TouchableOpacity>
                        <Text onPress={() => navigation.navigate("Dashboard")} style={styles.btnStyle}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ECF1FA',
    },
    logo: {
        flex: 0.4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoTextView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
        fontFamily: 'LatoLight',
    },
    logoTextBold: {
        fontFamily: 'LatoBold',
        fontSize: 20,
        color: '#2A2AC0',
        marginHorizontal: 2,
    },
    logoText: {
        marginHorizontal: 2,
        fontSize: 20,
        color: '#2A2AC0',
    },
    content: {
        flex: 0.6,
        alignItems: 'center',
    },
    mobileHeading: {
        fontSize: 24,
        fontFamily: 'LatoBold',
        color: '#181461',
    },
    mobileInfo: {
        color: '#1C1C1C',
        fontSize: 14,
        fontFamily: 'Lato',
        marginVertical: 10
    },
    btn: {
        paddingHorizontal: 10
    },
    btnStyle: {
        color: '#FFFFFF',
        backgroundColor: '#2A2AC0',
        paddingHorizontal: 130,
        paddingVertical: 15,
        borderRadius: 10,
        marginBottom: 15
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
})