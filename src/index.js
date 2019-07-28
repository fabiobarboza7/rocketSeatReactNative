import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import './config/ReactotronConfig';

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
