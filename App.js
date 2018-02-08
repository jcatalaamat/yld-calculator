import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Calculator from './app/calculator';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Calculator/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
