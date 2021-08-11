import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import InitComponent from '../components/initComponent/InitComponent';
import CarsDetailsForm from '../components/carsDetailsForm/CarsDetailsForm';

const Stack = createNativeStackNavigator();

export const Routes = (props) => {

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName="CarsDetailsForm"
            >
                <Stack.Screen
                    name="CarsDetailsForm"
                    component={CarsDetailsForm}
                />
                <Stack.Screen
                    name="InitComponent"
                    component={InitComponent}
                />
            </Stack.Navigator>
        </NavigationContainer>
    
    )
}
