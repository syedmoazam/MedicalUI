import React from 'react';
import { StatusBar, StyleSheet, View, Text, TouchableOpacity, Dimensions, TextInput, Image, ScrollView } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { Image as Img } from '../../components';
import { stats } from '../../assets/images/imagesSVGs';

export default function Heartrate({ navigation }) {
    return (
        <>
            <StatusBar translucent backgroundColor={'transparent'} />
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: Dimensions.get('window').width, marginTop: 40 }}>
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
                    <Text style={styles.mobileHeading}>Heart Rate</Text>
                </View>
                <View style={styles.content}>
                    <ScrollView>
                        <View>
                            <View style={styles.average}>
                                <Text style={styles.heading}>Rest Heart Rate Average</Text>
                                <Text style={styles.beats}><Text style={styles.beatCount}>61</Text> BPM</Text>
                                <Text style={{ fontFamily: 'Lato', fontSize: 14, color: '#1C1C1C' }}>May 2019 - May 2020</Text>
                            </View>
                            <View style={styles.dayMonth}>
                                <Text style={styles.notSelect}>D</Text>
                                <Text style={styles.notSelect}>W</Text>
                                <Text style={styles.notSelect}>M</Text>
                                <Text style={styles.select}>Y</Text>
                            </View>
                            <View>
                                <Img image={stats} />
                            </View>
                        </View>
                        <View>
                            <View style={styles.average}>
                                <Text style={styles.heading}>Walking Heart Rate Average</Text>
                                <Text style={styles.beats}><Text style={styles.beatCount}>101</Text> BPM</Text>
                                <Text style={{ fontFamily: 'Lato', fontSize: 14, color: '#1C1C1C' }}>May 2019 - May 2020</Text>
                            </View>
                            <View style={styles.dayMonth}>
                                <Text style={styles.notSelect}>D</Text>
                                <Text style={styles.notSelect}>W</Text>
                                <Text style={styles.notSelect}>M</Text>
                                <Text style={styles.select}>Y</Text>
                            </View>
                            <View>
                                <Img image={stats} />
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
        flex: 0.15,
        alignItems: 'baseline',
        justifyContent: 'flex-start',
    },
    content: {
        flex: 0.85,
        alignItems: 'center',
    },
    mobileHeading: {
        fontSize: 16,
        fontFamily: 'LatoBold',
        color: '#1C1C1C',
        marginHorizontal: 20,
        marginTop: 5
    },
    navIcon: {
        marginVertical: 10,
        marginHorizontal: 20
    },
    heart: {
        marginStart: 64,
        marginTop: 37.2
    },
    average: {
        marginTop: 14,
        marginBottom: 18,
        alignItems: 'flex-start',
        width: 350,
        marginHorizontal: 20
    },
    heading: {
        color: '#2A2AC0',
        fontFamily: 'Lato',
        fontSize: 14,
    },
    beats: {
        fontFamily: 'Lato',
        fontSize: 14,
        color: '#1C1C1C',
        marginTop: 7,
        marginBottom: 8,
    },
    beatCount: {
        fontSize: 24
    },
    dayMonth: {
        flexDirection: 'row',
        width: 350,
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#DCE5F4',
        borderRadius: 10,
        marginHorizontal: 20
    },
    notSelect: {
        color: '#1C1C1C',
        fontFamily: 'Lato',
        fontSize: 12,
        paddingStart: 16,
        paddingTop: 5,
        paddingEnd: 17,
        paddingBottom: 6,
    },
    select: {
        color: '#1C1C1C',
        fontSize: 12,
        fontFamily: 'Lato',
        backgroundColor: '#FFFFFF',
        paddingStart: 16,
        paddingTop: 5,
        paddingEnd: 17,
        paddingBottom: 6,
        borderRadius: 10,
        // box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
})

