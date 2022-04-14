import React, { FunctionComponent } from "react"

import { View, Text, SafeAreaView, StyleSheet, Button } from "react-native"

const App: FunctionComponent = () => {
  const doSomethingCool = () =>
    alert(`There's no place like home, there's no place like home...`)

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.headerView}>
          <Text style={styles.headerText}>Hello, world!</Text>
        </View>
        <View style={styles.colorBoxViewWrapper}>
          <View style={styles.bodyTextView}>
            <Text style={styles.bodyText}>
              Here is a display of some of the colors used within the MPLSDark
              theme.
            </Text>
          </View>
          <View style={[styles.colorBoxView, styles.cyanView]}>
            <Text style={[styles.bodyText, styles.colorBoxText]}>
              Cyan #7db4c7
            </Text>
          </View>
          <View style={[styles.colorBoxView, styles.magentaView]}>
            <Text style={[styles.bodyText, styles.whiteBoxText]}>
              Magenta #c24f9f
            </Text>
          </View>
          <View style={[styles.colorBoxView, styles.yellowView]}>
            <Text style={[styles.bodyText, styles.colorBoxText]}>
              Yellow #b3ff66
            </Text>
          </View>
          <View style={[styles.colorBoxView, styles.blackView]}>
            <Text style={[styles.bodyText, styles.whiteBoxText]}>
              Black #454254
            </Text>
          </View>
        </View>
        <Button
          color={"#b3ff66"}
          onPress={() => doSomethingCool()}
          title="Home"
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#1c192e",
  },
  container: {
    marginHorizontal: 20,
    flex: 1,
  },
  headerView: {
    margin: 20,
  },
  bodyTextView: {
    marginBottom: 10,
  },
  colorBoxViewWrapper: {
    flex: 1,
    padding: 10,
  },
  colorBoxView: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  cyanView: {
    backgroundColor: "#7db4c7",
  },
  magentaView: {
    backgroundColor: "#c24f9f",
  },
  yellowView: {
    backgroundColor: "#b3ff66",
  },
  blackView: {
    backgroundColor: "#454254",
  },
  colorBoxText: {
    color: "#1c192e",
  },
  whiteBoxText: {
    color: "#f3ffe7",
  },
  headerText: {
    color: "#b3ff66",
    fontSize: 24,
    fontWeight: "200",
    lineHeight: 36,
    letterSpacing: 1.5,
    textAlign: "center",
    textTransform: "uppercase",
  },
  bodyText: {
    color: "#f3ffe7",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
    textAlign: "center",
  },
})

export default App
