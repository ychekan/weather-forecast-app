import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import { withTheme } from 'react-native-paper';
import PropTypes from 'prop-types';

const HomeView = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

  return (
    <View style={styles.container}>
      <Text>Test j</Text>
    </View>
  );
};

HomeView.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired,
};

export default withNavigation(withTheme(HomeView));
