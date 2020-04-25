import React from 'react';
import { View, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import { withTheme } from 'react-native-paper';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Layout from '../../layout/Layout';
import ButtonBig from '../../components/ButtonBig/ButtonBig';
import TextInput from '../../components/TextInput/TextInput';

const EnterNameView = ({ theme, navigation }) => {
  const { t } = useTranslation();
  const styles = StyleSheet.create({
    layout: {
      paddingHorizontal: theme.sizes.mainIntent
    },
    container: {
      marginTop: 59,
      marginHorizontal: 14
    },
    button: {
      marginTop: 59
    }
  });

  return (
    <Layout style={styles.layout}>
      <View style={styles.container}>
        <TextInput
          label={`* ${t('firstName')}`}
          value="Magnus"
          onChangeText={() => {}}
        />
        <TextInput
          label={t('lastName')}
          value=""
          onChangeText={() => {}}
        />
      </View>
      <ButtonBig
        onPress={() => navigation.navigate('NotRequestsYet')}
        label={t('next')}
        style={styles.button}
      />
    </Layout>
  );
};

EnterNameView.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      blueTitle: PropTypes.string.isRequired,
      defaultText: PropTypes.string.isRequired,
    }).isRequired,
    sizes: PropTypes.shape({
      mainIntent: PropTypes.number.isRequired,
      buttonLetterSpacing: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired,
};

export default withNavigation(withTheme(EnterNameView));