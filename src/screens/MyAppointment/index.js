import React from 'react';
import { StatusBar, StyleSheet, View, Text, TouchableOpacity, Dimensions, TextInput, Image, ScrollView } from 'react-native';
import { Ionicons, EvilIcons, FontAwesome5, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { MyButton } from '../../components';

export default function MAppointment({ navigation }) {
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
                    <Text style={styles.mobileHeading}>My Appointments</Text>
                    <View style={styles.searchField}>
                        <View style={styles.searchBar}>
                            <TextInput placeholder="Search" style={styles.searchField} keyboardType='ascii-capable' />
                            <EvilIcons name="search" size={24} color="#D1D1D1" />
                        </View>
                    </View>
                </View>
                <View style={styles.content}>
                    <View style={styles.up}>
                        <Text style={styles.textBold}>Upcoming</Text>
                        <Text style={styles.textRegular}>Past</Text>
                    </View>
                    <ScrollView>
                        <View style={styles.history}>
                            <Text style={styles.date}>09/04/2021</Text>
                            <View style={styles.drEditBox}>
                                <Text style={styles.dr}>Dentist - Clara Odding <MaterialCommunityIcons style={styles.info} name="information-variant" size={16} color="black" /></Text>
                                <Text style={styles.edit}><Feather name="edit-2" size={16} color="#2A2AC0" />Modify   </Text>
                            </View>
                        </View>
                        <View style={styles.history}>
                            <Text style={styles.date}>21/04/2021</Text>
                            <View style={styles.drEditBox}>
                                <Text style={styles.dr}>Cardiologist - Steven Pauliner <MaterialCommunityIcons style={styles.info} name="information-variant" size={16} color="black" /></Text>
                                <Text style={styles.edit}><Feather name="edit-2" size={16} color="#2A2AC0" />Modify   </Text>
                            </View>
                        </View>
                        <View style={styles.lastRecord}>
                            <Text style={styles.date}>18/06/2021</Text>
                            <View style={styles.drEditBox}>
                                <Text style={styles.dr}>Dermatologist - Noemi Shinte <MaterialCommunityIcons style={styles.info} name="information-variant" size={16} color="black" /></Text>
                                <Text style={styles.edit}><Feather name="edit-2" size={16} color="#2A2AC0" />Modify   </Text>
                            </View>
                        </View>
                        <MyButton onPress={()=>navigation.navigate("BookAppointment")}>Book a new appointment</MyButton>
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
        paddingVertical: 15,
        borderTopWidth: 1,
    },
    date: {
        color: '#989BA1',
        fontSize: 12,
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

