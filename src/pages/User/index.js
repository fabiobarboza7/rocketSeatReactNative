import React from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';

export default function User({ navigation }) {
  return (
    <View>
      <Text>{navigation.getParam('user')}</Text>
    </View>
  );
}
