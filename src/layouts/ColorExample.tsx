import React, { FunctionComponent } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { ColorBox } from '../components'

import { Sizing, Typography, Outlines, Colors } from '../../styles'

const ColorExample: FunctionComponent = () => {
  const doSomethingCool = () =>
    alert(`There's no place like home, there's no place like home...`)

  return (
    <View style={style.container}>
      <View style={style.headerContainer}>
        <Text style={style.header}>Serenity | Colors</Text>
        <Text style={style.subheader}>
          Accent colors of the MPLSDark theme.
        </Text>
      </View>
      <View style={style.colorBoxContainer}>
        <ColorBox
          color={Colors.primary.s200}
          label="Primary (s200)"
          labelColor={Colors.neutral.black}
        />
        <ColorBox
          color={Colors.primary.brand}
          label="Primary (brand)"
          labelColor={Colors.neutral.black}
        />
        <ColorBox
          color={Colors.primary.s600}
          label="Primary (s600)"
          labelColor={Colors.neutral.white}
        />
        <View style={style.divider} />
        <ColorBox
          color={Colors.secondary.s200}
          label="Secondary (s200)"
          labelColor={Colors.neutral.black}
        />
        <ColorBox
          color={Colors.secondary.brand}
          label="Secondary (brand)"
          labelColor={Colors.neutral.black}
        />
        <ColorBox
          color={Colors.secondary.s600}
          label="Secondary (s600)"
          labelColor={Colors.neutral.black}
        />
        <View style={style.divider} />
        <ColorBox
          color={Colors.success.s400}
          label="Success"
          labelColor={Colors.neutral.white}
        />
        <ColorBox
          color={Colors.warning.s400}
          label="Warning"
          labelColor={Colors.neutral.black}
        />
        <ColorBox
          color={Colors.danger.s400}
          label="Danger"
          labelColor={Colors.neutral.white}
        />
      </View>
      <Button
        color={Colors.secondary.brand}
        onPress={() => doSomethingCool()}
        title="Home"
      />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Sizing.x10,
    marginHorizontal: Sizing.x20,
  },
  headerContainer: {
    marginBottom: Sizing.x20,
    paddingBottom: Sizing.x10,
    borderBottomWidth: Outlines.borderWidth.thin,
    borderColor: Colors.neutral.s500,
  },
  colorBoxContainer: {
    flex: 1,
    padding: 10,
  },
  header: {
    ...Typography.header.x60,
    textAlign: 'center',
  },
  subheader: {
    ...Typography.subheader.x20,
    textAlign: 'center',
  },
  divider: {
    marginTop: Sizing.x10,
    marginBottom: Sizing.x20,
    borderBottomWidth: Outlines.borderWidth.hairline,
    borderColor: Colors.neutral.s500,
  },
})

export default ColorExample
