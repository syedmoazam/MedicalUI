import React from 'react';
import { StatusBar, StyleSheet, View, Text, TouchableOpacity, Dimensions, TextInput, ScrollView, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { filter, moreIcon } from '../../assets/images/imagesSVGs';
import { Image as Img } from '../../components';
import { marker, calendar, rating } from '../../assets/images/imagesSVGs';

export default function BookAppointment({ navigation }) {
    return (
        <>
            <StatusBar translucent backgroundColor={'transparent'} />
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: Dimensions.get('window').width }}>
                        <TouchableOpacity>
                            <Text style={styles.navIcon} onPress={() => navigation.openDrawer()}>
                                <FontAwesome5 name="align-left" size={24} color="#181461" />
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text style={styles.navIcon}>
                                <FontAwesome5 name="user-circle" size={26} color="#181461" />
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.mobileHeading}>Book an appointment</Text>
                </View>
                <View style={styles.search}>
                    <View style={styles.searchBar}>
                        <EvilIcons name="search" size={24} color="#2A2AC0" />
                        <TextInput placeholderTextColor={'#2A2AC0'} placeholder="Doctor, Specialities …" style={styles.searchField} keyboardType='ascii-capable' />
                    </View>
                    <View style={styles.searchBar}>
                        <Img image={marker} />
                        <TextInput placeholderTextColor={'#2A2AC0'} placeholder="Select Area" style={styles.searchField} keyboardType='ascii-capable' />
                    </View>
                    <View style={styles.searchBar}>
                        <Img image={calendar} />
                        <TextInput placeholderTextColor={'#2A2AC0'} placeholder="Select Date" style={styles.searchField} keyboardType='ascii-capable' />
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.btnStyle}>Search</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.content}>
                    <View style={styles.up}>
                        <Text style={styles.textBold}>All Specialities</Text>
                        <Text style={styles.textRegular}><Img image={filter}/></Text>
                    </View>
                    <ScrollView>
                        <View style={styles.details}>
                            <View style={styles.image}>
                                <Image style={styles.drPic} source={require('../../assets/images/dr1.jpg')}/>
                            </View>
                            <View style={styles.info}>
                                <Text style={styles.name}>Dr. Martin Pilier</Text>
                                <Text style={styles.otherInfo}>Cardiologist</Text>
                                <Text style={styles.otherInfo}>Luxembourg Ville - 2 km</Text>
                                <Text style={styles.otherInfo}>
                                    <Img image={rating}/>(213)
                                </Text>
                            </View>
                            <View style={styles.moreIcon}>
                                <Img image={moreIcon}/>
                            </View>
                        </View>
                        <View style={styles.details}>
                            <View style={styles.image}>
                                <Image style={styles.drPic} source={require('../../assets/images/dr1.jpg')}/>
                            </View>
                            <View style={styles.info}>
                                <Text style={styles.name}>Dr. Martin Pilier</Text>
                                <Text style={styles.otherInfo}>Cardiologist</Text>
                                <Text style={styles.otherInfo}>Luxembourg Ville - 2 km</Text>
                                <Text style={styles.otherInfo}>
                                    <Img image={rating}/>(213)
                                </Text>
                            </View>
                            <View style={styles.moreIcon}>
                                <Img image={moreIcon}/>
                            </View>
                        </View>
                        <View style={styles.details}>
                            <View style={styles.image}>
                                <Image style={styles.drPic} source={require('../../assets/images/dr1.jpg')}/>
                            </View>
                            <View style={styles.info}>
                                <Text style={styles.name}>Dr. Martin Pilier</Text>
                                <Text style={styles.otherInfo}>Cardiologist</Text>
                                <Text style={styles.otherInfo}>Luxembourg Ville - 2 km</Text>
                                <Text style={styles.otherInfo}>
                                    <Img image={rating}/>(213)
                                </Text>
                            </View>
                            <View style={styles.moreIcon}>
                                <Img image={moreIcon}/>
                            </View>
                        </View>
                        <View style={styles.details}>
                            <View style={styles.image}>
                                <Image style={styles.drPic} source={require('../../assets/images/dr1.jpg')}/>
                            </View>
                            <View style={styles.info}>
                                <Text style={styles.name}>Dr. Martin Pilier</Text>
                                <Text style={styles.otherInfo}>Cardiologist</Text>
                                <Text style={styles.otherInfo}>Luxembourg Ville - 2 km</Text>
                                <Text style={styles.otherInfo}>
                                    <Img image={rating}/>(213)
                                </Text>
                            </View>
                            <View style={styles.moreIcon}>
                                <Img image={moreIcon}/>
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
        flex: 0.2,
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF'
    },
    search: {
        flex: 0.3,
    },
    content: {
        flex: 0.5,
    },
    mobileHeading: {
        fontSize: 24,
        fontFamily: 'LatoBold',
        color: '#181461',
        marginHorizontal: 20
    },
    navIcon: {
        marginVertical: 20,
        marginHorizontal: 20
    },
    searchBar: {
        width: Dimensions.get("window").width - 40,
        backgroundColor: '#FFFFFF',
        marginTop: 10,
        paddingStart: 10,
        marginBottom: 10,
        height: 43,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    searchField: {
        marginHorizontal: 10,
        width: 280,
    },
    btnStyle: {
        color: '#FFFFFF',
        fontFamily: 'Lato',
        fontSize: 16,
        backgroundColor: '#2A2AC0',
        textAlign: 'center',
        borderRadius: 10,
        paddingVertical: 15,
        marginTop: 7
    },
    textBold: {
        fontFamily: 'Lato',
        fontSize: 16,
        color: '#1C1C1C'
    },
    up: {
        width: 345,
        flexDirection: 'row',
        marginEnd: 7,
        justifyContent: 'space-between',
        marginVertical: 10
    },
    details: {
        flexDirection: 'row',
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#C2C6CD',
        flex: 1,    
    },
    image: {
        flex: 0.2,
    },
    drPic: {
        borderRadius: 10,
    },
    info:{
        flex: 0.7,
        marginStart: 10
    },
    name: {
        fontFamily: 'LatoBold',
        fontSize: 14,
        color: '#1C1C1C'
    },
    otherInfo: {
        fontSize: 12,
        fontFamily: 'Lato',
        color: '#989BA1'
    },
    moreIcon: {
        flex: 0.1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})