import React from 'react';
import { StatusBar, StyleSheet, View, Text, TouchableOpacity, Dimensions, TextInput, Image, ScrollView } from 'react-native';
import { Ionicons, EvilIcons, FontAwesome5, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { MyButton, Image as Img } from '../../components';
import { tickGreen, marker, mobile } from '../../assets/images/imagesSVGs';

export default function Payment({ navigation }) {
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
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 20 }}>
                        <Img image={tickGreen} />
                        <Text style={styles.mobileHeading}> Appointment Confirmed</Text>
                    </View>
                    <View>
                        <Text style={styles.textBig}>
                            Thu, 09 Apr <Text style={styles.textBigBold}>08: 00</Text>
                        </Text>
                    </View>
                    <Text style={{ marginHorizontal: 48, fontFamily: 'LatoBold', fontSize: 16, color: '#1C1C1C' }}>Dr. Clara Odding - <Text style={{ fontFamily: 'Lato', fontWeight: '300' }}>Dentist</Text></Text>
                    <View style={styles.location}>
                        <View style={{marginBottom: 20}}>
                            <Img image={marker} />
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.textLocation}>2 Rue de Ermesinde{'\n'}Frisange - Luxembourg 3{'\n'}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.content}>
                    <View style={styles.imageMargin}>
                        <Img image={mobile}/>
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.pBtn}>Add to calender</Text>
                    </TouchableOpacity>
                    <View style={{marginTop: 46}}>
                        <Text>2 days 3 hours before the appointment</Text>
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
        flex: 0.35,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    content: {
        flex: 0.65,
        width: 350,
        alignItems: 'center'
    },
    mobileHeading: {
        fontSize: 16,
        fontFamily: 'LatoBold',
        color: '#1C1C1C',
    },
    navIcon: {
        marginVertical: 10,
        marginHorizontal: 20
    },
    textBig: {
        fontSize: 25,
        fontFamily: 'Lato',
        color: '#1C1C1C',
        width: 229,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        paddingStart: 13,
        paddingVertical: 12,
        marginTop: 26,
        marginBottom: 18,
        marginHorizontal: 20
    },
    textBigBold: {
        fontFamily: 'LatoBold',
        color: '#2AC052'
    },
    location: {
        flexDirection: 'row',
        alignItems: "center",
        borderBottomColor: '#C2C6CD',
        borderBottomWidth: 1,
        width: 350,
        marginHorizontal: 20,
    },
    textLocation: {
        marginStart: 15.2,
        fontFamily: 'Lato',
        fontSize: 14,
        color: '#989BA1',
        paddingBottom: 2,
    },
    imageMargin: {
        marginTop: 75.2,
    },
    pBtn: {
        marginTop: 77.6,
        paddingVertical: 12,
        paddingHorizontal: 124.3,
        color: '#FFFFFF',
        backgroundColor: '#2A2AC0',
        fontFamily: 'Lato',
        borderRadius: 10
    }
})

