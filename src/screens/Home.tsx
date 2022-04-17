import React, { FunctionComponent } from 'react'
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native'

import { Sizing, Typography, Outlines, Colors } from '../styles'

const Home: FunctionComponent = ({ navigation }) => {
  return (
    <View style={style.container}>
      <TouchableHighlight
        style={[style.button, style.mplsBtn]}
        underlayColor={Colors.primary.s600}
        activeOpacity={0.65}
        onPress={() => navigation.navigate('ColorExample')}
      >
        <Text style={style.mplsLabel}>MPLS Dark Pro</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={[style.button, style.solarBtn]}
        underlayColor={Colors.solarized.orange}
        activeOpacity={0.65}
        onPress={() => navigation.navigate('Solarized')}
      >
        <Text style={style.solarLabel}>Solarized</Text>
      </TouchableHighlight>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Sizing.x20,
    justifyContent: 'center',
    backgroundColor: Colors.neutral.black,
  },
  button: {
    alignItems: 'center',
    marginHorizontal: Sizing.x40,
    marginBottom: Sizing.x10,
    padding: Sizing.x10,
    borderRadius: Outlines.borderRadius.base,
  },
  mplsBtn: {
    backgroundColor: Colors.primary.brand,
  },
  mplsLabel: {
    ...Typography.subheader.x30,
    color: Colors.neutral.white,
    textTransform: 'uppercase',
  },
  solarBtn: {
    backgroundColor: Colors.solarized.yellow,
  },
  solarLabel: {
    ...Typography.subheader.x30,
    color: Colors.solarized.base2,
    textTransform: 'uppercase',
  },
})

export default Home
