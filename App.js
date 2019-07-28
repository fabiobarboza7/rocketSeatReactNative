import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function App() {
  return (
    <View>
      <Text style={styles.text}>Oi</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'red',
  },
});
