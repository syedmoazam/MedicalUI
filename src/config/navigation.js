import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    Intro,
    Home,
    MobileSignIn,
    Verification,
    Location,
    Map,
    Dashboard,
    MAppointment,
    BookAppointment,
    Doctor,
    Confirmation,
    Payment,
    MedicalRecords,
    Feedback,
    Heartbeat,
    Heartrate,
    Forums
} from '../screens';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'react-native';
import { CustomDrawer, Image as Img } from '../components';
import {
    drawer1,
    drawer2,
    drawer3,
    drawer4,
    drawer5,
    drawer6,
    drawer7,
    drawer8,
} from '../assets/images/imagesSVGs';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function AppDrawer() {
    return (
        <>
            <StatusBar barStyle={'dark-content'} translucent backgroundColor={'transparent'} />
            <Drawer.Navigator initialRouteName="Intro" screenOptions={{
                headerShown: false,
                drawerLabelStyle: { color: '#767676', position: 'relative', right: 24 },
            }}
                drawerContent={props => <CustomDrawer {...props} />}
            >
                <Drawer.Screen name="MAppointment" component={MAppointment} options={{
                    drawerActiveBackgroundColor: '#FFFFFF',
                    drawerLabel: 'My Appointments',
                    drawerIcon: ({ color }) => (
                        <Img image={drawer1} />
                    ),
                }}
                />
                <Drawer.Screen name="Dashboard" component={Dashboard} options={{
                    drawerActiveBackgroundColor: '#FFFFFF',
                    drawerLabel: 'Dashboard',
                    drawerIcon: ({ color }) => (
                        <Img image={drawer1} />
                    ),
                }}
                />
                <Drawer.Screen name="BookAppointment" component={BookAppointment} options={{
                    drawerActiveBackgroundColor: '#FFFFFF',
                    drawerLabel: 'Book an Appointment',
                    drawerIcon: ({ color }) => (
                        <Img image={drawer2} />
                    ),
                }}
                />
                <Drawer.Screen name="Intro" component={Intro} options={{ headerShown: false }} options={{
                    drawerActiveBackgroundColor: '#FFFFFF',
                    drawerLabel: 'Intro Slider',
                    drawerIcon: ({ color }) => (
                        <Img image={drawer2} />
                    ),
                }} />
                <Drawer.Screen name="Home" component={Home} options={{ headerShown: false }} options={{
                    drawerActiveBackgroundColor: '#FFFFFF',
                    drawerLabel: 'Home',
                    drawerIcon: ({ color }) => (
                        <Img image={drawer2} />
                    ),
                }} />
                <Drawer.Screen name="MobileSignIn" component={MobileSignIn} options={{ headerShown: false }} options={{
                    drawerActiveBackgroundColor: '#FFFFFF',
                    drawerLabel: 'SignIn',
                    drawerIcon: ({ color }) => (
                        <Img image={drawer2} />
                    ),
                }} />
                <Drawer.Screen name="Verification" component={Verification} options={{ headerShown: false }} options={{
                    drawerActiveBackgroundColor: '#FFFFFF',
                    drawerLabel: 'Verification',
                    drawerIcon: ({ color }) => (
                        <Img image={drawer2} />
                    ),
                }} />
                <Drawer.Screen name="Location" component={Location} options={{ headerShown: false }} options={{
                    drawerActiveBackgroundColor: '#FFFFFF',
                    drawerLabel: 'Location',
                    drawerIcon: ({ color }) => (
                        <Img image={drawer2} />
                    ),
                }} />
                <Drawer.Screen name="Doctor" component={Doctor} options={{ headerShown: false }} options={{
                    drawerActiveBackgroundColor: '#FFFFFF',
                    drawerLabel: 'Doctor',
                    drawerIcon: ({ color }) => (
                        <Img image={drawer2} />
                    ),
                }} />
                <Drawer.Screen name="Confirmation" component={Confirmation} options={{ headerShown: false }} options={{
                    drawerActiveBackgroundColor: '#FFFFFF',
                    drawerLabel: 'Confirmation',
                    drawerIcon: ({ color }) => (
                        <Img image={drawer2} />
                    ),
                }} />
                <Drawer.Screen name="Payment" component={Payment} options={{ headerShown: false }} options={{
                    drawerActiveBackgroundColor: '#FFFFFF',
                    drawerLabel: 'Payment',
                    drawerIcon: ({ color }) => (
                        <Img image={drawer2} />
                    ),
                }} />
                <Drawer.Screen name="MedicalRecords" component={MedicalRecords} options={{ headerShown: false }} options={{
                    drawerActiveBackgroundColor: '#FFFFFF',
                    drawerLabel: 'Medical Records',
                    drawerIcon: ({ color }) => (
                        <Img image={drawer2} />
                    ),
                }} />
                <Drawer.Screen name="Feedback" component={Feedback} options={{ headerShown: false }} options={{
                    drawerActiveBackgroundColor: '#FFFFFF',
                    drawerLabel: 'Feedback',
                    drawerIcon: ({ color }) => (
                        <Img image={drawer2} />
                    ),
                }} />
                <Drawer.Screen name="Heartbeat" component={Heartbeat} options={{ headerShown: false }} options={{
                    drawerActiveBackgroundColor: '#FFFFFF',
                    drawerLabel: 'Heartbeat',
                    drawerIcon: ({ color }) => (
                        <Img image={drawer2} />
                    ),
                }} />
                <Drawer.Screen name="Heartrate" component={Heartrate} options={{ headerShown: false }} options={{
                    drawerActiveBackgroundColor: '#FFFFFF',
                    drawerLabel: 'Heartbeat',
                    drawerIcon: ({ color }) => (
                        <Img image={drawer2} />
                    ),
                }} />
                <Drawer.Screen name="Forums" component={Forums} options={{ headerShown: false }} options={{
                    drawerActiveBackgroundColor: '#FFFFFF',
                    drawerLabel: 'Forums',
                    drawerIcon: ({ color }) => (
                        <Img image={drawer2} />
                    ),
                }} />
                <Drawer.Screen name="Map" component={Map} options={{ headerShown: false }} options={{
                    drawerActiveBackgroundColor: '#FFFFFF',
                    drawerLabel: 'Map',
                    drawerIcon: ({ color }) => (
                        <Img image={drawer2} />
                    ),
                }} />
            </Drawer.Navigator>
        </>
    )
}

function AppStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Intro">
            <Stack.Screen name="Intro" component={Intro} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="MobileSignIn" component={MobileSignIn} options={{ headerShown: false }} />
            <Stack.Screen name="Verification" component={Verification} options={{ headerShown: false }} />
            <Stack.Screen name="Location" component={Location} options={{ headerShown: false }} />
            <Stack.Screen name="Map" component={Map} options={{ headerShown: false }} />
            {/* <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} /> */}
        </Stack.Navigator>
    )
}


export default function AppNavigation() {
    return (
        <>
            <NavigationContainer>
                <AppDrawer />
                {/* <AppStack /> */}
            </NavigationContainer>
        </>
    )
}