import React from 'react';
import { StatusBar, StyleSheet, View, Text, TouchableOpacity, Dimensions, TextInput, Image, ScrollView } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { Image as Img, MyButton } from '../../components';
import {doctor, rating, rating2 } from '../../assets/images/imagesSVGs';

export default function Feedback({ navigation }) {
    return (
        <>
            <StatusBar translucent backgroundColor={'transparent'} />
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: Dimensions.get('window').width, marginTop: 25 }}>
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
                    <Text style={styles.mobileHeading}>Leave your feedback</Text>
                    <View style={styles.row}>
                        <View>
                            <Img image={doctor} />
                        </View>
                        <View style={{ marginStart: 15 }}>
                            <Text style={styles.textBoldPrimary}>Dr. Clara Odding</Text>
                            <Text style={styles.textSecondary1}>Dentist</Text>
                            <Text style={styles.textSecondary2}>2 Rue de Ermesinde{"\n"}Frisange - Luxembourg{'\n'}</Text>
                            <Text style={styles.textSecondary2, styles.marginTopi}><Img image={rating} /></Text>
                        </View>
                    </View>
                    <Text style={{borderTopWidth: 1, borderTopColor: '#C2C6CD', marginHorizontal: 20, width: 350, }}></Text>
                </View>
                <View style={styles.doctor}>
                    <ScrollView>
                        <View style={{alignItems: 'center', marginTop: 20.3}}>
                            <Img image={rating2}/>
                        </View>
                        <View>
                            <TextInput textAlignVertical='top' multiline={true} style={styles.textArea} placeholder="Write your feedback"/>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <Text style={styles.feedbackBtn}>Add feedback</Text>
                            </TouchableOpacity>
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
        flex: 0.34,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    doctor: {
        flex: 0.66,
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
    navIcon: {
        marginVertical: 10,
        marginHorizontal: 20
    },
    mobileHeading: {
        fontSize: 16,
        fontFamily: 'LatoBold',
        color: '#1C1C1C',
        marginHorizontal: 20,
        marginBottom: 30,
    },
    row: {
        flexDirection: 'row',
        marginHorizontal: 20,
        width: 350,
        paddingBottom: 17
    },
    textArea: {
        backgroundColor: '#FFF',
        marginTop: 38.9,
        paddingVertical: 11,
        paddingHorizontal: 14.5,
        height: 174,
        borderRadius: 10
    },
    feedbackBtn: {
        borderWidth: 1,
        marginTop: 50,
        textAlign: 'center',
        paddingTop: 11,
        paddingBottom: 9,
        borderRadius: 10,
        backgroundColor: '#2A2AC0',
        color: '#FFFFFF'
    }
})

