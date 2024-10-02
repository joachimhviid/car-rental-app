import { useState } from 'react'
import type { StyleProp, TextInputProps, TextStyle } from 'react-native'
import { TextInput, View } from 'react-native'

export const AccessibleTextInput = (
  props: TextInputProps & {
    focusStyle?: StyleProp<TextStyle>
    inputStyle?: StyleProp<TextStyle>
    icon?: React.ReactNode
  },
) => {
  const [isFocused, setIsFocused] = useState(false)
  return (
    <View style={[props.style, { flexDirection: 'row', alignItems: 'center' }, isFocused && props.focusStyle]}>
      {props.icon}
      <TextInput {...props} style={props.inputStyle} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} />
    </View>
  )
}
