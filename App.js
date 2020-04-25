import React from 'react';
import { createAppContainer } from 'react-navigation';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import AppNavigator from './src/navigation/AppNavigator';

import store from './src/store';
import theme from './src/theme';

const Navigation = createAppContainer(AppNavigator);

const App = () => (
  // eslint-disable-next-line react/jsx-filename-extension
  <StoreProvider store={store}>
    <PaperProvider theme={theme}>
      <Navigation />
    </PaperProvider>
  </StoreProvider>
);

export default App;
