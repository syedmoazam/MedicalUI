import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    Image,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { logoSVG } from '../../assets/images/imagesSVGs';
import { Image as Img } from '../../components';

function Intro({ navigation }) {
    const [showRealApp, setShowRealApp] = useState(false);
    const onDone = () => {
        setShowRealApp(true);
    };
    const onSkip = () => {
        setShowRealApp(true);
    };

    const RenderItem = ({ item }) => {
        return (
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Img image={logoSVG} />
                    <View style={styles.logoTextView}>
                        <Text style={styles.logoTextBold}>Medical</Text>
                        <Text style={styles.logoText}>App</Text>
                    </View>
                    <Text style={styles.SlideTitle}>{item.title}</Text>
                </View>
                <View style={styles.content}>

                    {/* <Image image={item.image}/> */}
                    <Image source={item.image} />
                </View>
            </View>
        );
    };

    return (
        <>
            <StatusBar backgroundColor={'transparent'} translucent barStyle="dark-content" />
            {showRealApp ? (
                navigation.navigate("Home")
            ) : (
                <AppIntroSlider 
                    dotClickEnabled={true}
                    data={slides}
                    renderItem={RenderItem}
                    onDone={onDone}
                    showSkipButton={true}
                    onSkip={onSkip}
                    activeDotStyle={{ backgroundColor: '#2A2AC0' }}
                />
            )}
        </>
    );
};

export default Intro;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        // borderWidth: 1
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
        flex: 0.5,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    SlideTitle: {
        color: '#181461',
        fontSize: 24,
        fontFamily: 'LatoBold',
        marginTop: 70,
    },
    btn: {
        color: '#2A2AC0',
    }
});

const slides = [
    {
        key: 's1',
        title: 'Find Your Doctor',
        image: require("../../assets/images/intro1.png"),
        // image: intro1P,
        backgroundColor: '#ECF1FA',
    },
    {
        key: 's2',
        title: 'Storage Your Medical Reports',
        image: require("../../assets/images/intro2.png"),
        backgroundColor: '#ECF1FA',
    },
    {
        key: 's3',
        title: 'Discuss in the forum',
        image: require("../../assets/images/intro3.png"),
        backgroundColor: '#ECF1FA',
    }
];