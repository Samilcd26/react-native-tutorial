import React from 'react';
import {View} from 'react-native';
import rootStyle from './RootStyle';

function RootPage(): JSX.Element {
  return (
    <View style={rootStyle.body}>
      <View style={rootStyle.testa} />
      <View />
      <View />
    </View>
  );
}

export default RootPage;
