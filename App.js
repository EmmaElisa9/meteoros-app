import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import Location from './screens/Location';
import Meteors from './screens/Meteors';
import Updates from './screens/Updates';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator inicialRouteName = "Home" screenOptions={{
        headerShown: false
      }}>

        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Location" component={Location}/>
        <Stack.Screen name="Meteors" component={Meteors}/>
        <Stack.Screen name="Updates" component={Updates}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
