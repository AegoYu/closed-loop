import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Map: {
    screen: MapScreen
  }
}, {
  initialRouteName: 'Home',
  headerMode: 'none'
});

const AppContainer = createAppContainer(AppNavigator);

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: 'white',
    accent: '#55D3BE',
  }
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <AppContainer />
    </PaperProvider>
  );
}