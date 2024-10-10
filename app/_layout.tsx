import { Slot } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, ImageBackground, View } from 'react-native'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'

export default function App() {
  const insets = useSafeAreaInsets()
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={{ ...styles.container, paddingTop: insets.top }}
        source={require('../assets/car-bg-image.webp')}
      >
        <Slot />
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    justifyContent: 'center',
  },
})
