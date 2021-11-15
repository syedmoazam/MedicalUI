import React, { useState } from 'react';
import { Text, View, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { logoSVG } from '../../assets/images/imagesSVGs';
import { Image as Img } from '../../components';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const CELL_COUNT = 4;

export default function Verification({ navigation }) {
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    return (
        <>
            <StatusBar translucent backgroundColor={'transparent'} />
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Img image={logoSVG} />
                    <View style={styles.logoTextView}>
                        <Text style={styles.logoTextBold}>Medical</Text>
                        <Text style={styles.logoText}>App</Text>
                    </View>
                </View>
                <View style={styles.content}>
                    <Text style={styles.mobileHeading}>Verification</Text>
                    <Text style={styles.mobileInfo}>Insert your code here:</Text>
                    <View style={styles.verify}>
                        <CodeField
                            ref={ref}
                            {...props}
                            value={value}
                            onChangeText={setValue}
                            cellCount={CELL_COUNT}
                            rootStyle={styles.codeFieldRoot}
                            keyboardType="number-pad"
                            textContentType="oneTimeCode"
                            renderCell={({ index, symbol, isFocused }) => (
                                <Text
                                    key={index}
                                    style={[styles.cell, isFocused && styles.focusCell]}
                                    onLayout={getCellOnLayoutHandler(index)}>
                                    {symbol || (isFocused ? <Cursor /> : null)}
                                </Text>
                            )}
                        />
                        <TouchableOpacity>
                            <Text onPress={()=>setValue('')} style={styles.clear}>x</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                        <Text onPress={() => navigation.navigate("Location")} style={styles.btnStyle}>Continue</Text>
                    </TouchableOpacity>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', width: 315}}>
                        <Text style={styles.invalidOption}>Resend code</Text>
                        <Text onPress={()=>navigation.navigate("MobileSignIn")} style={styles.invalidOption}>Change Number</Text>
                    </View>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ECF1FA',
    },
    logo: {
        flex: 0.4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoTextView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
        fontFamily: 'LatoLight',
    },
    logoTextBold: {
        fontFamily: 'LatoBold',
        fontSize: 20,
        color: '#2A2AC0',
        marginHorizontal: 2,
    },
    logoText: {
        marginHorizontal: 2,
        fontSize: 20,
        color: '#2A2AC0',
    },
    content: {
        flex: 0.6,
        alignItems: 'center',
    },
    mobileHeading: {
        fontSize: 24,
        fontFamily: 'LatoBold',
        color: '#181461',
    },
    mobileInfo: {
        color: '#1C1C1C',
        fontSize: 14,
        fontFamily: 'Lato',
        marginVertical: 10
    },
    btn: {
        paddingHorizontal: 10
    },
    btnStyle: {
        color: '#FFFFFF',
        backgroundColor: '#2A2AC0',
        paddingHorizontal: 130,
        paddingVertical: 15,
        borderRadius: 10,
        marginBottom: 15
    },
    cell: {
        width: 40,
        height: 40,
        lineHeight: 38,
        fontSize: 24,
        borderBottomWidth: 1,
        borderColor: '#A4A4A4',
        textAlign: 'center',
        marginHorizontal: 10
    },
    focusCell: {
        borderColor: '#2A2AC0',
    },
    verify: {
        marginVertical: 20,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        paddingHorizontal: 25,
        paddingVertical: 8
    },
    clear: {
        color: '#D1D1D1',
        fontSize: 25,
        marginStart: 10
    },
    invalidOption: {
        color: '#2A2AC0',
        fontSize: 14,
        fontFamily: 'Lato'
    }
})