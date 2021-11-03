import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import SignScreen from './screens/SignScreen';
import { AppTabNavigator } from './components/AppTabNavigator';

export default function App() {
  return <AppContainer />;
}

const switchNavigator = createSwitchNavigator({
  SignScreen: { screen: SignScreen },
  Tab: { screen: AppTabNavigator },
});

const AppContainer = createAppContainer(switchNavigator);
