import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export default class Calculator extends Component {
  constructor(props) {
    super(props);
  }


  render() {

    return (
      <View style={styles.container}>
        <View style={styles.inner}>
          <View style={styles.pad}>

          </View>
          <View style={styles.keys}>
            <View style={styles.key}>
              <Text>1</Text>
            </View>
            <View style={styles.key}>
              <Text>1</Text>
            </View>
            <View style={styles.key}>
              <Text>1</Text>
            </View>
            <View style={styles.key}>
              <Text>1</Text>
            </View>
            <View style={styles.key}>
              <Text>1</Text>
            </View>
            <View style={styles.key}>
              <Text>1</Text>
            </View>
            <View style={styles.key}>
              <Text>1</Text>
            </View>
            <View style={styles.key}>
              <Text>1</Text>
            </View>
            <View style={styles.key}>
              <Text>1</Text>
            </View>
            <View style={styles.key}>
              <Text>1</Text>
            </View>

          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 400,
    width: width - 80,
    backgroundColor: 'red',
    borderRadius: 40
  },
  inner: {
    flex: 1,
    margin: 40,
    alignItems: 'center',
  },
  pad: {
    height: 60,
    width: 220,
    backgroundColor: 'blue',
  },
  keys: {
    marginTop: 20,
    backgroundColor: 'yellow',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  },
  key: {
    width: 60,
    height: 50,
    marginTop: 5,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
