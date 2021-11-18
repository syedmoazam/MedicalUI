import React from 'react';
import { StatusBar, StyleSheet, View, Text, TouchableOpacity, Dimensions, TextInput, Image, ScrollView } from 'react-native';
import { Ionicons, EvilIcons, FontAwesome5, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { MyButton, Image as Img } from '../../components';
import { bullet, doctor, languages } from '../../assets/images/imagesSVGs';

export default function Doctor({ navigation }) {
    return (
        <>
            <StatusBar translucent backgroundColor={'transparent'} />
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: Dimensions.get('window').width }}>
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
                </View>
                <View style={styles.doctor}>
                    <View style={styles.row}>
                        <View>
                            <Img image={doctor} />
                        </View>
                        <View style={{ marginStart: 15 }}>
                            <Text style={styles.textBoldPrimary}>Dr. Clara Odding</Text>
                            <Text style={styles.textSecondary1}>Dentist</Text>
                            <Text style={styles.textSecondary2}>2 Rue de Ermesinde{"\n"}Frisange - Luxembourg 3 km</Text>

                        </View>
                    </View>
                    <ScrollView style={{ marginTop: 15 }} horizontal={true}>
                        <View style={styles.bgWhite}>
                            <View style={styles.row}>
                                <View>
                                    <Text style={styles.dateBold}>Thu, 09 Apr</Text>
                                    <Text style={styles.slots}>3 Slots available</Text>
                                </View>
                                <View style={{ width: 142.5, alignItems: 'center', paddingTop: 5 }}>
                                    <TouchableOpacity>
                                        <Text style={styles.apBtn}>SEE ALL</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.timeSchedule}>
                                <Text style={styles.time}>08:00</Text>
                                <Text style={styles.time}>12:00</Text>
                                <Text style={styles.time}>15:00</Text>
                            </View>
                        </View>
                        <View style={styles.bgWhite}>
                            <View style={styles.row}>
                                <View>
                                    <Text style={styles.dateBold}>Fri, 10 Apr</Text>
                                    <Text style={styles.slots}>3 Slots available</Text>
                                </View>
                                <View style={{ width: 142.5, alignItems: 'center', paddingTop: 5 }}>
                                    <TouchableOpacity>
                                        <Text style={styles.apBtn}>SEE ALL</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.timeSchedule}>
                                <Text style={styles.time}>08:00</Text>
                                <Text style={styles.time}>12:00</Text>
                                <Text style={styles.time}>15:00</Text>
                            </View>
                        </View>
                    </ScrollView>
                    <TouchableOpacity>
                        <Text style={styles.book}>Book an appointment</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.content}>
                    <View style={styles.dcf}>
                        <Text style={styles.doctorInfo}>Doctor</Text>
                        <Text style={styles.doctorInfo, styles.doctorInfoBlack}>Clinic</Text>
                        <Text style={styles.doctorInfo, styles.doctorInfoBlack}>Feedback</Text>
                    </View>
                    <ScrollView style={styles.details}>
                        <View style={styles.languages}>
                            <Text style={styles.heading}>Languages</Text>
                            <View style={styles.languageNames}>
                                <Text style={styles.language}><Img image={languages.English} /> English</Text>
                                <Text style={styles.language}><Img image={languages.French} /> French</Text>
                                <Text style={styles.language}><Img image={languages.German} /> German</Text>
                            </View>
                        </View>
                        <View style={styles.Education}>
                            <Text style={styles.heading}>Education</Text>
                            <View style={{ marginTop: 12, marginBottom: 8 }}>
                                <Text style={styles.bullet}><Img image={bullet} />   UCL - Cliniques Saint - Luc (1987 -1999)- Docteur</Text>
                                <Text style={styles.bullet}><Img image={bullet} />   Cardiologue. Recherche au Laboratoire d’échocardiographie.</Text>
                                <Text style={styles.bullet}><Img image={bullet} />   ULG-CHU Start-Tilman (1999-2000). Recherche</Text>
                            </View>
                        </View>
                        <View style={styles.Education}>
                            <Text style={styles.heading}>Publications</Text>
                            <View style={{ marginTop: 12, marginBottom: 8 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{marginTop: 2, width: 15}}>
                                        <Img image={bullet} />
                                    </View>
                                    <Text style={styles.bullet}>
                                        Electrocardiograms Findings - Lebrun F, Blouard Ph, Ch Brohe
                                        Quotation of functional mitral regurgitation during bicycle exercise in patients with heart failure. 1998
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.Education}>
                            <Text style={styles.heading}>Description</Text>
                            <View style={{ marginTop: 12, marginBottom: 8 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{marginTop: 2, width: 15}}>
                                        <Img image={bullet} />
                                    </View>
                                    <Text style={styles.bullet}>
                                        Electrocardiograms Findings - Lebrun F, Blouard Ph, Ch Brohe
                                        Quotation of functional mitral regurgitation during bicycle exercise in patients with heart failure. 1998
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
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
        flex: 0.125,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    doctor: {
        flex: 0.35,
        width: 350,
    },
    textBoldPrimary: {
        fontFamily: 'LatoBold',
        fontSize: 16,
        color: '#1C1C1C',
        marginTop: 3,
    },
    textSecondary1: {
        fontFamily: 'Lato',
        fontSize: 14,
        color: '#989BA1',
        marginVertical: 10
    },
    textSecondary2: {
        fontFamily: 'Lato',
        fontSize: 14,
        color: '#989BA1'
    },
    content: {
        flex: 0.5,
        marginHorizontal: 22
    },
    navIcon: {
        marginVertical: 10,
        marginHorizontal: 20
    },
    row: {
        flexDirection: 'row',
    },
    bgWhite: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 12,
        paddingHorizontal: 19,
        height: 113,
        width: 244,
        borderRadius: 10,
        marginEnd: 20,
    },
    dateBold: {
        fontFamily: 'LatoBold',
        fontSize: 14,
        color: '#1C1C1C'
    },
    slots: {
        fontFamily: 'Lato',
        fontSize: 12,
        color: '#A4A4A4',
        marginVertical: 10
    },
    apBtn: {
        backgroundColor: '#2A2AC0',
        color: '#FFFFFF',
        paddingHorizontal: 12,
        paddingVertical: 5,
        borderRadius: 10,
        width: 80,
        textAlign: 'center'
    },
    timeSchedule: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    time: {
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 10,
        marginVertical: 7,
        borderWidth: 1,
        borderColor: '#E7E7E7',
        color: '#1C1C1C'
    },
    book: {
        backgroundColor: '#2A2AC0',
        color: '#FFFFFF',
        textAlign: 'center',
        paddingVertical: 11,
        borderRadius: 10,
    },
    dcf: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 347,
        marginTop: 10,
        borderBottomColor: '#C2C6CD',
        borderBottomWidth: 1
    },
    doctorInfo: {
        color: '#2A2AC0',
        fontFamily: 'LatoBold',
        fontSize: 16,
        paddingBottom: 10,
        borderBottomColor: '#2A2AC0',
        borderBottomWidth: 1
    },
    doctorInfoBlack: {
        color: '#1C1C1C',
        fontFamily: 'Lato',
        borderBottomWidth: 0
    },
    details: {
        marginTop: 36,
    },
    heading: {
        color: '#1C1C1C',
        fontFamily: 'LatoBold',
        fontSize: 14
    },
    languageNames: {
        flexDirection: 'row'
    },
    language: {
        color: '#999CA1',
        fontSize: 12,
        fontFamily: 'Lato',
        width: 75,
        marginVertical: 12
    },
    languages: {
        borderBottomWidth: 1,
        borderBottomColor: '#C2C6CD'
    },
    Education: {
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#C2C6CD'
    },
    bullet: {
        fontSize: 12,
        color: '#989BA1',
        fontFamily: 'Lato',

    }
})

