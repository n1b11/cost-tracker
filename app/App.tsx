
import { ThemeProvider } from '@shopify/restyle';
import theme from './theme';
import Login from './pages/Login';
import Home from './pages/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';



const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default function App() {
  
  
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <RootStack />
      </ThemeProvider>
    </NavigationContainer>
  );
}
