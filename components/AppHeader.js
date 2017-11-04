import React from 'react';
import { StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';

export const AppHeader = ({ headerText }) => {
  const { header, centerComponent, outerContainer } = styles;

  return (
    <Header
      style={header}
      centerComponent={{
        text: headerText,
        style: centerComponent,
      }}
      outerContainerStyles={outerContainer}
    />
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
  },
  centerComponent: {
    color: '#fff',
  },
  outerContainer: {
    backgroundColor: '#e62117'
  },
});
