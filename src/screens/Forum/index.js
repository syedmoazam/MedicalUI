import React from 'react';
import { StatusBar, StyleSheet, View, Text, TouchableOpacity, Dimensions, TextInput, ScrollView } from 'react-native';
import { Ionicons, EvilIcons, FontAwesome5 } from '@expo/vector-icons';
import { download2, forum } from '../../assets/images/imagesSVGs';
import { Image as Img } from '../../components';

export default function Forums({ navigation }) {
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
                    <Text style={styles.mobileHeading}>Forum Discussions</Text>
                    <View style={styles.searchField}>
                        <View style={styles.searchBar}>
                            <TextInput placeholder="Search" style={styles.searchField} keyboardType='ascii-capable' />
                            <EvilIcons name="search" size={24} color="#D1D1D1" />
                        </View>
                    </View>
                </View>
                <View style={styles.content}>
                    <View style={styles.up}>
                        <Text style={styles.textBold}>Community</Text>
                        <Text style={styles.textRegular}>E-Consultations</Text>
                        <Text style={styles.textRegular}>Literature</Text>
                    </View>
                    <ScrollView>
                        <View style={styles.history}>
                            <View style={styles.drEditBox}>
                                <View>
                                    <Text style={styles.date}>18/02/2020</Text>
                                    <Text style={styles.dr}>Alcool - Tabac Drogues </Text>
                                </View>
                                <View style={styles.see}>
                                    <View style={{ alignItems: 'flex-end', justifyContent: 'flex-start', marginBottom: 5, marginEnd: 8 }}>
                                        <Text style={{ color: '#989BA1', fontFamily: 'Lato' }}><Img image={forum} /> 20</Text>
                                    </View>
                                    <Text style={styles.edit}> See more  <Img image={download2}/> </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.history}>
                            <View style={styles.drEditBox}>
                                <View>
                                    <Text style={styles.date}>17/02/2020</Text>
                                    <Text style={styles.dr}>Cardiologie et circulation </Text>
                                </View>
                                <View style={styles.see}>
                                    <View style={{ alignItems: 'flex-end', justifyContent: 'flex-start', marginBottom: 5, marginEnd: 8 }}>
                                        <Text style={{ color: '#989BA1', fontFamily: 'Lato' }}><Img image={forum} /> 12</Text>
                                    </View>
                                    <Text style={styles.edit}> See more  <Img image={download2}/> </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.history}>
                            <View style={styles.drEditBox}>
                                <View>
                                    <Text style={styles.date}>16/02/2020</Text>
                                    <Text style={styles.dr}>Diététique - Régimes </Text>
                                </View>
                                <View style={styles.see}>
                                    <View style={{ alignItems: 'flex-end', justifyContent: 'flex-start', marginBottom: 5, marginEnd: 8 }}>
                                        <Text style={{ color: '#989BA1', fontFamily: 'Lato' }}><Img image={forum} /> 45</Text>
                                    </View>
                                    <Text style={styles.edit}> See more  <Img image={download2}/> </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.history}>
                            <View style={styles.drEditBox}>
                                <View>
                                    <Text style={styles.date}>16/02/2020</Text>
                                    <Text style={styles.dr}>Endocrinologie - Diabète </Text>
                                </View>
                                <View style={styles.see}>
                                    <View style={{ alignItems: 'flex-end', justifyContent: 'flex-start', marginBottom: 5, marginEnd: 8 }}>
                                        <Text style={{ color: '#989BA1', fontFamily: 'Lato' }}><Img image={forum} /> 34</Text>
                                    </View>
                                    <Text style={styles.edit}> See more  <Img image={download2}/> </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.history}>
                            <View style={styles.drEditBox}>
                                <View>
                                    <Text style={styles.date}>15/02/2020</Text>
                                    <Text style={styles.dr}>Environnement et santé </Text>
                                </View>
                                <View style={styles.see}>
                                    <View style={{ alignItems: 'flex-end', justifyContent: 'flex-start', marginBottom: 5, marginEnd: 8 }}>
                                        <Text style={{ color: '#989BA1', fontFamily: 'Lato' }}><Img image={forum} /> 85</Text>
                                    </View>
                                    <Text style={styles.edit}> See more  <Img image={download2}/> </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.history}>
                            <View style={styles.drEditBox}>
                                <View>
                                    <Text style={styles.date}>11/02/2020</Text>
                                    <Text style={styles.dr}>Fatigue chronique </Text>
                                </View>
                                <View style={styles.see}>
                                    <View style={{ alignItems: 'flex-end', justifyContent: 'flex-start', marginBottom: 5, marginEnd: 8 }}>
                                        <Text style={{ color: '#989BA1', fontFamily: 'Lato' }}><Img image={forum} /> 91</Text>
                                    </View>
                                    <Text style={styles.edit}> See more  <Img image={download2}/> </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.history}>
                            <View style={styles.drEditBox}>
                                <View>
                                    <Text style={styles.date}>10/02/2020</Text>
                                    <Text style={styles.dr}>Fibromyalgie </Text>
                                </View>
                                <View style={styles.see}>
                                    <View style={{ alignItems: 'flex-end', justifyContent: 'flex-start', marginBottom: 5, marginEnd: 8 }}>
                                        <Text style={{ color: '#989BA1', fontFamily: 'Lato' }}><Img image={forum} /> 12</Text>
                                    </View>
                                    <Text style={styles.edit}> See more  <Img image={download2}/> </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.history}>
                            <View style={styles.drEditBox}>
                                <View>
                                    <Text style={styles.date}>10/02/2020</Text>
                                    <Text style={styles.dr}>Gastro-entérologie </Text>
                                </View>
                                <View style={styles.see}>
                                    <View style={{ alignItems: 'flex-end', justifyContent: 'flex-start', marginBottom: 5, marginEnd: 8 }}>
                                        <Text style={{ color: '#989BA1', fontFamily: 'Lato' }}><Img image={forum} /> 4</Text>
                                    </View>
                                    <Text style={styles.edit}> See more  <Img image={download2}/> </Text>
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
        marginTop: 4,
        fontFamily: 'Lato'
    },
    dr: {
        fontSize: 14,
        fontFamily: 'LatoBold',
        marginTop: 6.9,
        color: '#1C1C1C'
    },
    info: {
        color: '#2A2AC0'
    },
    drEditBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'center'
    },
    edit: {
        color: '#2A2AC0',
        fontFamily: 'LatoBold',
        fontSize: 14,
        position: 'relative',
        marginTop: 0.2
    },
    lastRecord: {
        borderBottomColor: '#C2C6CD',
        borderBottomWidth: 1,
        borderTopColor: '#C2C6CD',
        borderTopWidth: 1,
        paddingVertical: 15,
    },
    see: {
        justifyContent: 'center',
    }
})

