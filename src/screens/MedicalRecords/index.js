import React from 'react';
import { StatusBar, StyleSheet, View, Text, TouchableOpacity, Dimensions, TextInput, Image, ScrollView } from 'react-native';
import { Ionicons, EvilIcons, FontAwesome5, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { download } from '../../assets/images/imagesSVGs';
import { Image as Img } from '../../components';

export default function MedicalRecords({ navigation }) {
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
                    <Text style={styles.mobileHeading}>Medical Records</Text>
                    <View style={styles.searchField}>
                        <View style={styles.searchBar}>
                            <TextInput placeholder="Search" style={styles.searchField} keyboardType='ascii-capable' />
                            <EvilIcons name="search" size={24} color="#D1D1D1" />
                        </View>
                    </View>
                </View>
                <View style={styles.content}>
                    <View style={styles.up}>
                        <Text style={styles.textBold}>Clinics</Text>
                        <Text style={styles.textRegular}>Lab tests</Text>
                        <Text style={styles.textRegular}>Medicines</Text>
                    </View>
                    <ScrollView>
                        <View style={styles.history}>
                            <Text style={styles.date}>18/02/2020</Text>
                            <View style={styles.drEditBox}>
                                <Text style={styles.dr}>Dentist - Clara Odding </Text>
                                <Text style={styles.edit}><Img image={download}/> Download   </Text>
                            </View>
                        </View>
                        <View style={styles.history}>
                            <Text style={styles.date}>01/02/2020</Text>
                            <View style={styles.drEditBox}>
                                <Text style={styles.dr}>Dermatologist - Noemi Shinte </Text>
                                <Text style={styles.edit}><Img image={download}/> Download   </Text>
                            </View>
                        </View>
                        <View style={styles.history}>
                            <Text style={styles.date}>15/11/2019</Text>
                            <View style={styles.drEditBox}>
                                <Text style={styles.dr}>Cardiologist - Steven Pauliner </Text>
                                <Text style={styles.edit}><Img image={download}/> Download   </Text>
                            </View>
                        </View>
                        <View style={styles.history}>
                            <Text style={styles.date}>14/10/2019</Text>
                            <View style={styles.drEditBox}>
                                <Text style={styles.dr}>Ginecologist - Chiara Uber </Text>
                                <Text style={styles.edit}><Img image={download}/> Download   </Text>
                            </View>
                        </View>
                        <View style={styles.history}>
                            <Text style={styles.date}>02/09/2019</Text>
                            <View style={styles.drEditBox}>
                                <Text style={styles.dr}>Orthopedic - Stefano Lanza </Text>
                                <Text style={styles.edit}><Img image={download}/> Download   </Text>
                            </View>
                        </View>
                        <View style={styles.history}>
                            <Text style={styles.date}>01/09/2019</Text>
                            <View style={styles.drEditBox}>
                                <Text style={styles.dr}>Psychiatrist - Giovanna Conte </Text>
                                <Text style={styles.edit}><Img image={download}/> Download   </Text>
                            </View>
                        </View>
                        <View style={styles.history}>
                            <Text style={styles.date}>06/06/2019</Text>
                            <View style={styles.drEditBox}>
                                <Text style={styles.dr}>Dentist - Clara Odding </Text>
                                <Text style={styles.edit}><Img image={download}/> Download   </Text>
                            </View>
                        </View>
                        <View style={styles.lastRecord}>
                            <Text style={styles.date}>02/09/2019</Text>
                            <View style={styles.drEditBox}>
                                <Text style={styles.dr}>General Practitioner - Martina  Garnier</Text>
                                <Text style={styles.edit}><Img image={download}/> Download   </Text>
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
        flex: 0.25,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    content: {
        flex: 0.75,
    },
    mobileHeading: {
        fontSize: 16,
        fontFamily: 'LatoBold',
        color: '#1C1C1C',
        marginHorizontal: 20,
        marginTop: 20
    },
    navIcon: {
        marginVertical: 10,
        marginHorizontal: 20
    },
    searchBar: {
        width: Dimensions.get("window").width - 40,
        backgroundColor: '#FFFFFF',
        marginTop: 20,
        height: 43,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    searchField: {
        marginHorizontal: 15,
        marginStart: 17,
        width: 280,
    },
    textBold: {
        fontSize: 16,
        fontFamily: 'LatoBold',
        color: '#2A2AC0',
        borderBottomColor: '#2A2AC0',
        borderBottomWidth: 1,
        paddingBottom: 20
    },
    textRegular: {
        fontSize: 16,
        fontFamily: 'Lato',
        color: '#1C1C1C'
    },
    up: {
        width: 345,
        flexDirection: 'row',
        marginEnd: 7,
        justifyContent: 'space-between',
        marginTop: 40
    },
    history: {
        borderTopColor: '#C2C6CD',
        paddingVertical: 17,
        borderTopWidth: 1,
    },
    date: {
        color: '#989BA1',
        fontSize: 12,
        marginBottom: 4,
        fontFamily: 'Lato'
    },
    dr: {
        fontSize: 14,
        fontFamily: 'LatoBold',
        color: '#1C1C1C'
    },
    info: {
        color: '#2A2AC0'
    },
    drEditBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    edit: {
        color: '#2A2AC0',
        fontFamily: 'LatoBold',
        fontSize: 14,
        position: 'relative',
        bottom: 10
    },
    lastRecord:{
        borderBottomColor: '#C2C6CD',
        borderBottomWidth: 1,
        borderTopColor: '#C2C6CD',
        borderTopWidth: 1,
        paddingVertical: 15,
    }
})

