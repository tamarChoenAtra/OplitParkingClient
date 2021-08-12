import React from 'react';
import {
    StatusBar,
    SafeAreaView,
} from 'react-native';
import styles from '../styles/Styles';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import InitComponent from '../components/initComponent/InitComponent';
import CarsDetailsForm from '../components/carsDetailsForm/CarsDetailsForm';
import FirstScreen from '../components/firstScreen/FirstScreen';
import Auth1 from '../components/auth/Auth1';

const Stack = createNativeStackNavigator();

const addStaticBackgroundWithCircle = (props, Component) => {
    return (
        <SafeAreaView style={styles.background} >
            <Component {...props} />
        </SafeAreaView>
    )
}

const addStaticBackground = (props, Component) => {
    return (
        <SafeAreaView
            style={styles.background}>
            <Component {...props} />
        </SafeAreaView>
    )
}

export const Routes = () => {

    return (
        <>
            <StatusBar
                backgroundColor="#0A2550"
                barStyle="light-content"
            />

            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}
                    initialRouteName="FirstScreen"
                >
                    <Stack.Screen
                        name="CarsDetailsForm"
                        component={
                            (props) => addStaticBackground(props, CarsDetailsForm)
                        }
                    />
                    <Stack.Screen
                        name="InitComponent"
                        component={
                            (props) => addStaticBackground(props, InitComponent)
                        }
                    />
                    <Stack.Screen
                        name="FirstScreen"
                        component={
                            (props) => addStaticBackground(props, FirstScreen)
                        }
                    />
                    <Stack.Screen
                        name="Auth1"
                        component={
                            (props) => addStaticBackground(props, Auth1)
                        }
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}
