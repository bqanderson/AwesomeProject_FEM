import React, { FunctionComponent } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  SectionList,
} from 'react-native'
import { ColorBox } from '../components'
import { COLOR_LIST, MESSAGING_COLORS } from '../constants'

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
      <SectionList
        style={style.colorBoxContainer}
        sections={COLOR_LIST}
        keyExtractor={(item, index) => `${item.hexCode}_0${index}`}
        renderItem={({ item }) => (
          <ColorBox
            color={item.hexCode}
            label={item.colorName}
            labelColor={item.labelColor}
          />
        )}
        renderSectionHeader={({ section }) => (
          <View style={style.sectionHeaderContainer}>
            <Text style={style.sectionHeader}>{section.title}</Text>
          </View>
        )}
        renderSectionFooter={() => <View style={style.divider} />}
      />
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
    // marginBottom: Sizing.x20,
    paddingBottom: Sizing.x10,
    backgroundColor: Colors.neutral.black,
    borderBottomWidth: Outlines.borderWidth.thin,
    borderColor: Colors.neutral.s500,
  },
  header: {
    ...Typography.header.x60,
    textAlign: 'center',
  },
  subheader: {
    ...Typography.subheader.x20,
    textAlign: 'center',
  },
  colorBoxContainer: {
    flex: 1,
    padding: Sizing.x10,
    paddingTop: 0,
    backgroundColor: Colors.neutral.black,
  },
  sectionHeaderContainer: {
    paddingVertical: Sizing.x10,
    backgroundColor: Colors.neutral.black,
  },
  sectionHeader: {
    ...Typography.subheader.x30,
    textTransform: 'uppercase',
  },
  divider: {
    marginTop: Sizing.x10,
    marginBottom: Sizing.x20,
    borderBottomWidth: Outlines.borderWidth.hairline,
    borderColor: Colors.neutral.s400,
  },
})

export default ColorExample
