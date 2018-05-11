/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  FlatList,
  Text,
  View
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

type Props = {};
export default class App extends Component<Props> {
  render() {
    const data = [];
    for (let i = 1; i <= 50; i++) {
      data.push(i);
    }
    return (
      <View style={styles.container}>
        <FlatList
            data={data}
            keyExtractor={({ item }) => `${item}`}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Text>
                  {item}
                </Text>
              </View>
            )}
            inverted
            renderScrollComponent={(props) => <ScrollView {...props} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
});
