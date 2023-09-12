import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';

type StackParamList = {
  Splash: undefined;
};

export type AppNavigationProps = StackParamList;

const Stack = createNativeStackNavigator<StackParamList>();

const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={SplashScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
