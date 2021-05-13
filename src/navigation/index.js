import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Splash from '../screens/Splash';


const  Stack = createStackNavigator()

function CoreNavigation() {
    return (
      <NavigationContainer>
        <Stack.Navigator 
        screenOptions={{
            headerShown: false,
            animationEnabled: false,
          }}
        >
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name='Home' component={Home}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default CoreNavigation;

