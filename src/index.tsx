import React, { FunctionComponent } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

import { Colors } from './styles'
import { ColorExample } from './layouts'

const App: FunctionComponent = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ColorExample />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.neutral.black,
  },
})

export default App
