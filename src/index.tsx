import React, { FunctionComponent } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Home, ColorExample, Soralized } from './screens'

import { Colors } from './styles'

const App: FunctionComponent = () => {
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.neutral.black,
            shadowColor: 'transparent',
          },
          headerTintColor: Colors.secondary.brand,
          headerBackTitleVisible: false,
        }}
      >
        <Stack.Screen name="Color Palettes" component={Home} />
        <Stack.Screen
          options={{ title: 'MPLS Dark Pro' }}
          name="ColorExample"
          component={ColorExample}
        />
        <Stack.Screen
          options={({ route }) => {
            console.log('TEST ===> options route params:', route)
            return {
              headerStyle: {
                backgroundColor: Colors.solarized.base03,
                shadowColor: 'transparent',
              },
              headerTintColor: Colors.solarized.yellow,
              title: 'Solarized',
            }
          }}
          name="Solarized"
          component={Soralized}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
