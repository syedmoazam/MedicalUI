import React, { useState, useRef } from 'react';
import { Text, View, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { logoSVG } from '../../assets/images/imagesSVGs';
import { Image as Img } from '../../components';
import PhoneInput from 'react-native-phone-number-input';

export default function MobileSignIn({ navigation }) {
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef("");
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
          <Text style={styles.mobileHeading}>Mobile Number</Text>
          <Text style={styles.mobileInfo}>The code will be send to the full mobile number</Text>
          <View style={{marginVertical: 20}}>
            <PhoneInput
              textInputStyle={{ color: '#2A2AC0' }}
              codeTextStyle={{ color: '#2A2AC0' }}
              countryPickerButtonStyle={{ color: '#2A2AC0' }}
              ref={phoneInput}
              defaultValue={value}
              defaultCode="PK"
              layout="second"
              onChangeText={(text) => {
                setValue(text);
              }}
              onChangeFormattedText={(text) => {
                setFormattedValue(text);
              }}
              autoFocus
            />
          </View>
          <TouchableOpacity>
            <Text style={styles.btnStyle} onPress={()=>navigation.navigate("Verification")}>Continue</Text>
        </TouchableOpacity>
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
  btn:{
    paddingHorizontal: 10
  },
  btnStyle: {
    color: '#FFFFFF',
    backgroundColor: '#2A2AC0',
    paddingHorizontal: 130,
    paddingVertical: 15,
    borderRadius: 10
  },
})