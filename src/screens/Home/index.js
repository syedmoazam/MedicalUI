
import React from 'react';
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Image as Img, MyButton } from '../../components';
import { logoSVG } from '../../assets/images/imagesSVGs';
import { FontAwesome } from '@expo/vector-icons';

export default function Home({ navigation }) {
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
          <View style={styles.greet}>
            <Text style={styles.welcome}>Welcome</Text>
            <Text style={styles.msg}>Sign in to continue</Text>
          </View>
          <View>
            <MyButton onPress={() => navigation.navigate("MobileSignIn")}>Sign in with mobile number</MyButton>
            <Text style={styles.msg, { textAlign: 'center', marginVertical: 15 }}>or</Text>
            <TouchableOpacity>
              <View style={styles.facebookBtn}>
                <FontAwesome name="facebook-f" size={16} color="white" />
                <Text style={styles.facebookText}>
                  Sign in with facebook
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.condition}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.conditionText}>By Signing in, you accept our <Text style={{ color: '#2A2AC0' }}>Terms and Conditions</Text></Text>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ECF1FA',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ECF1FA',
  },
  logo: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center'
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
    flex: 0.3,
  },
  greet: {
    alignItems: 'center'
  },
  welcome: {
    color: '#181461',
    fontFamily: 'LatoBold',
    fontSize: 24,
  },
  msg: {
    color: '#1C1C1C',
    fontSize: 14,
    fontFamily: 'Lato',
    marginVertical: 15
  },
  facebookBtn: {
    backgroundColor: '#3A559F',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 13,
  },
  facebookText: {
    color: '#FFFFFF',
    marginHorizontal: 12
  },
  condition: {
    flex: 0.3,
    justifyContent: 'flex-end',
    marginVertical: 10,
  },
  conditionText: {
    fontFamily: 'Lato',
    fontSize: 14,
    marginVertical: 25,
  }
})
