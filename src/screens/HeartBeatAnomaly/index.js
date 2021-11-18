import React from 'react';
import { StatusBar, StyleSheet, View, Text, TouchableOpacity, Dimensions, TextInput, Image, ScrollView } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { Image as Img } from '../../components';
import { heart, rating } from '../../assets/images/imagesSVGs';

export default function Heartbeat({ navigation }) {
    return (
        <>
            <StatusBar translucent backgroundColor={'transparent'} />
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: Dimensions.get('window').width, marginTop: 30 }}>
                        <TouchableOpacity>
                            <Text style={styles.navIcon} onPress={() => navigation.openDrawer()}>
                                <Ionicons name="chevron-back" size={24} color="#181461" />
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text style={styles.navIcon}>
                                <FontAwesome5 name="user-circle" size={26} color="#181461" />
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.mobileHeading}>Heartbeat Anomaly</Text>
                    <View style={styles.heart}>
                        <Img image={heart} />
                    </View>
                </View>
                <View style={styles.content}>
                    <View>
                        <Text style={styles.message}>
                            Dear patient,{'\n'}There is a heartbeat anomaly that has been {'\n'}recorded, and you should book a visit with a{'\n'} specialist as soon as possible.
                        </Text>
                    </View>
                    <View style={styles.details}>
                        <View style={styles.image}>
                            <Image style={styles.drPic} source={require('../../assets/images/dr1.jpg')} />
                        </View>
                        <View style={styles.info}>
                            <Text onPress={() => navigation.navigate("Confirmation")} style={styles.name}>Dr. Martin Pilier</Text>
                            <Text onPress={() => navigation.navigate("Confirmation")} style={styles.otherInfo}>Cardiologist</Text>
                            <Text onPress={() => navigation.navigate("Confirmation")} style={styles.otherInfo}>Luxembourg Ville - 2 km</Text>
                            <Text onPress={() => navigation.navigate("Confirmation")} style={styles.otherInfo}>
                                <Img image={rating} />(213)
                            </Text>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Text style={styles.bookBtn}>Book a visit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ECF1FA',
    },
    header: {
        flex: 0.45,
        alignItems: 'baseline',
        justifyContent: 'space-evenly',
    },
    content: {
        flex: 0.55,
        alignItems: 'center',
    },
    mobileHeading: {
        fontSize: 16,
        fontFamily: 'LatoBold',
        color: '#1C1C1C',
        marginHorizontal: 20,
        marginBottom: 50
    },
    navIcon: {
        marginVertical: 10,
        marginHorizontal: 20
    },
    heart: {
        marginStart: 64,
        marginTop: 37.2
    },
    message: {
        fontFamily: 'Lato',
        fontSize: 16,
        color: '#1C1C1C',
        backgroundColor: '#FFFFFF',
        paddingTop: 11,
        paddingBottom: 14.2,
        paddingStart: 14.5,
        paddingEnd: 11.5,
        borderRadius: 10,
        marginTop: 38.8
    },
    details: {
        flexDirection: 'row',
        width: 238,
        marginTop: 19.8,
        marginBottom: 39
    },
    info: {
        marginStart: 13
    },
    name: {
        color: '#1C1C1C',
        fontSize: 14,
        fontFamily: 'LatoBold'
    },
    otherInfo: {
        color: '#999CA1',
        fontSize: 12,
        fontFamily: 'Lato'
    },
    bookBtn: {
        color: '#FFFFFF',
        backgroundColor: '#2A2AC0',
        paddingTop: 11,
        paddingBottom: 9,
        paddingHorizontal: 129.5,
        borderRadius: 10
    }
})

