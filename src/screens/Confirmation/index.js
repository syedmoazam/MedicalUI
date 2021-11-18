import React from 'react';
import { StatusBar, StyleSheet, View, Text, TouchableOpacity, Dimensions, TextInput, Image, ScrollView } from 'react-native';
import { Ionicons, EvilIcons, FontAwesome5, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { MyButton, Image as Img } from '../../components';
import { marker, credit } from '../../assets/images/imagesSVGs';

export default function Confirmation({ navigation }) {
    return (
        <>
            <StatusBar translucent backgroundColor={'transparent'} />
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: Dimensions.get('window').width, marginBottom: 15 }}>
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
                <View style={styles.content}>
                    <View>
                        <Text style={styles.mobileHeading}>Dr. Clara Odding Confirmation</Text>
                    </View>
                    <View>
                        <Text style={styles.textBig}>
                            Thu, 09 Apr <Text style={styles.textBigBold}>08: 00</Text>
                        </Text>
                    </View>
                    <View style={styles.location}>
                        <Img image={marker} />
                        <View style={{alignItems: 'center'}}>
                            <Text style={styles.textLocation}>2 Rue de Ermesinde{'\n'} Frisange - Luxembourg 3{'\n'}</Text>
                        </View>
                    </View>
                    <View>
                        <TextInput placeholderTextColor='#767676' style={styles.inputMarginTop} placeholder={'Message'} keyboardType='ascii-capable' />
                        <TextInput placeholderTextColor='#767676' style={styles.input} placeholder={'Reason of the Visit'} keyboardType='ascii-capable' />
                        <Text style={styles.scaling}>Check + Scaling</Text>
                        <Text style={{ fontFamily: 'Lato', color: '#181461', fontSize: 24 }}>124€{'\n'}</Text>
                        <Text style={styles.cardText}>Select the card</Text>
                        <ScrollView horizontal={true}>
                            <Img image={credit} />
                            <View style={{ position: 'absolute', width: 255, height: 160, borderWidth: 5, top: 21, left: 23, borderRadius: 10, borderColor: '#2A2AC0' }}></View>
                            <Img image={credit} />
                            {/* left = 23*14.2 */}
                            <View style={{ position: 'absolute', width: 255, height: 160, borderWidth: 5, top: 21, left: 326.6, borderRadius: 10, borderColor: '#2A2AC0' }}></View>
                        </ScrollView>
                        <Text style={{ fontFamily: 'Lato', fontSize: 16, color: '#1C1C1C', position: 'absolute', top: 460 }}>Manage cards<Ionicons name="chevron-forward" size={16} color="#1C1C1C" /></Text>
                        <TouchableOpacity>
                            <Text style={styles.btnPay} onPress={()=>navigation.navigate("Payment")}>Pay now</Text>
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
        flex: 0.17,
        justifyContent: 'space-around',
    },
    content: {
        flex: 0.83,
        width: 360,
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
    },
    textBigBold: {
        fontFamily: 'LatoBold',
        color: '#2AC052'
    },
    location: {
        flexDirection: 'row',
        alignItems: "center",
        borderBottomColor: '#C2C6CD',
        borderBottomWidth: 1
    },
    textLocation: {
        marginStart: 15.2,
        fontFamily: 'Lato',
        fontSize: 14,
        color: '#989BA1',
        paddingBottom: 2,
    },
    input: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 10,
        borderRadius: 10,
        marginVertical: 10,
        paddingHorizontal: 14.5,
    },
    inputMarginTop: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 10,
        borderRadius: 10,
        marginBottom: 10,
        paddingHorizontal: 14.5,
        marginTop: 20,
        height: 43,
        fontFamily: 'Lato',
        fontSize: 16,
    },
    scaling: {
        marginTop: 5,
        marginBottom: 4,
        fontSize: 24,
        color: '#181461',
        fontFamily: 'LatoBold',
    },
    cardText: {
        fontSize: 18,
        fontFamily: 'LatoBold',
        color: '#181461'
    },
    btnPay: {
        color: '#FFFFFF',
        textAlign: 'center',
        paddingTop: 11,
        paddingBottom: 9,
        borderRadius: 10,
        marginTop: 17,
        fontFamily: 'Lato',
        backgroundColor: '#2A2AC0'
    }
})


