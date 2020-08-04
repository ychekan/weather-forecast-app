import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../screens/Home/Home';

import theme from '../theme';

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    letterSpacing: -0.41,
  },
  headerStyle: {
    backgroundColor: theme.colors.primary,
    elevation: 0,
    shadowOpacity: 0,
  },
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 26,
  },
  headerTitleStyleOffer: {
    fontSize: 21,
    fontWeight: '600',
    letterSpacing: -0.41,
    lineHeight: 16,
    textAlign: 'center'
  },
});

const Home = {
  screen: HomeScreen,
  navigationOptions: {
    headerTitle: () => {},
    headerStyle: styles.headerStyle,
    headerTintColor: theme.colors.background,
    headerTitleStyle: styles.headerTitleStyle,
    headerLeft: () => {},
    headerRight: () => {},
  },
};

const MainAppStack = createStackNavigator(
  {
    Home,
  },
  {
    defaultNavigationOptions: {
      safeAreaInsets: Platform.OS === 'android' ? { top: 0 } : {},
      headerTitleAlign: 'center',
    },
  },
);

const RootNavigator = createStackNavigator({
  MainApp: {
    screen: MainAppStack,
  },
  Modal: {
    screen: () => {}
  }
}, {
  mode: 'modal',
  headerMode: 'none',
});

export default RootNavigator;
