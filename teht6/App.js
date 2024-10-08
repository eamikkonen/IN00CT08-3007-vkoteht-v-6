import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Position from './components/Position';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sääsovellus</Text>
      <Position />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

