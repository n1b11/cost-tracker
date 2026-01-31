
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from '@shopify/restyle';
import theme from './theme';
import Login from './Components/Login';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Login />
    </ThemeProvider>
  );
}

