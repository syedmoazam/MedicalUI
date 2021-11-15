import React from 'react';
import { StatusBar, StyleSheet, View, Text, TouchableOpacity, Dimensions, TextInput, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { dashboard2, dashboard1, dashboard3, dashboard4 } from '../../assets/images/imagesSVGs';
import { Image as Img } from '../../components';

export default function Dashboard({ navigation }) {
    return (
        <>
            <StatusBar translucent backgroundColor={'transparent'} />
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: Dimensions.get('window').width }}>
                        <TouchableOpacity>
                            <Text style={styles.navIcon} onPress={()=>navigation.openDrawer()}>
                                <FontAwesome5 name="align-left" size={24} color="#181461" />
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text style={styles.navIcon}>
                                <FontAwesome5 name="user-circle" size={26} color="#181461" />
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.mobileHeading}>Dashboard</Text>
                </View>
                <View style={styles.search}>
                    <View style={styles.searchBar}>
                        <TextInput placeholder="Search" style={styles.searchField} keyboardType='ascii-capable' />
                        <EvilIcons name="search" size={24} color="#D1D1D1" />
                    </View>
                </View>
                <View style={styles.content}>
                    <View style={styles.contentRow}>
                        <View style={styles.contentRowItem}>
                            <View style={styles.textCard}>
                                <Text style={styles.text}>Appointments</Text>
                            </View>
                            <View style={styles.imageCard}>
                                <Img image={dashboard1} />
                            </View>
                        </View>
                        <View style={styles.contentRowItem}>
                            <View style={styles.textCard}>
                                <Text style={styles.text}>Records</Text>
                            </View>
                            <View style={styles.imageCard}>
                                <Img image={dashboard2} />
                            </View>
                        </View>
                    </View>
                    <View style={styles.contentRow}>
                        <View style={styles.contentRowItem}>
                            <View style={styles.textCard}>
                                <Text style={styles.text}>Forum</Text>
                            </View>
                            <View style={styles.imageCard}>
                                <Img image={dashboard3} />
                            </View>
                        </View>
                        <View style={styles.contentRowItem}>
                            <View style={styles.textCard}>
                                <Text style={styles.text}>Account Settings</Text>
                            </View>
                            <View style={styles.imageCard}>
                                <Img image={dashboard4} />
                            </View>
                        </View>
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
        flex: 0.2,
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF'
    },
    search: {
        flex: 0.1,
    },
    content: {
        flex: 0.7,
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
        marginTop: 20,
        height: 43,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    searchField: {
        marginHorizontal: 15,
        width: 280,
    },
    contentRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: Dimensions.get('window').width,
        marginBottom: 20
    },
    contentRowItem: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        marginHorizontal: 20,
        height: 280,
        width: 150,
        borderRadius: 10
    },
    textCard: {
        height: 110,
        alignItems: 'flex-start',
        width: 150,
    },
    text: {
        fontFamily: 'LatoBold',
        fontSize: 16,
        color: '#181461',
        marginHorizontal: 10
    },
    imageCard: {
        position: 'relative',
        bottom: 50
    }
})