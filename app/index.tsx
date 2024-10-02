import { StatusBar } from 'expo-status-bar'
import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import RNDateTimePicker, { type DateTimePickerEvent } from '@react-native-community/datetimepicker'
import { useState } from 'react'
import { format, intlFormat } from 'date-fns'
import { AccessibleTextInput } from '../components/AccessibleTextInput'
import FontAwesome from '@expo/vector-icons/FontAwesome'

export default function App() {
  const [fromDate, setFromDate] = useState(new Date())
  const [showFrom, setShowFrom] = useState(false)
  const [toDate, setToDate] = useState(new Date())
  const [showTo, setShowTo] = useState(false)

  const onFromDateChange = (event: DateTimePickerEvent, selectedDate: Date | undefined) => {
    setShowFrom(false)
    if (selectedDate) setFromDate(selectedDate)
  }
  const onToDateChange = (event: DateTimePickerEvent, selectedDate: Date | undefined) => {
    setShowTo(false)
    if (selectedDate) setToDate(selectedDate)
  }

  const getDisplayDate = (date: Date) => {
    return intlFormat(date, {
      day: 'numeric',
      month: 'short',
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Rent a car!</Text>
      <View style={{ gap: 8 }}>
        <AccessibleTextInput
          style={styles.inputWrapper}
          placeholder="Where do you want to drive?"
          focusStyle={styles.focusInput}
          inputStyle={styles.inputContent}
          icon={<FontAwesome name="search" size={24} color="black" style={{ marginRight: 8 }} />}
        />
        <View style={styles.dateTimePickerContainer}>
          <Pressable style={styles.datePicker} onPress={() => setShowFrom(true)}>
            <Text>Pickup</Text>
            <Text>{getDisplayDate(fromDate)}</Text>
          </Pressable>
          <Pressable style={styles.timePicker} onPress={() => setShowFrom(true)}>
            <Text>16:00</Text>
          </Pressable>
        </View>
        <View style={styles.dateTimePickerContainer}>
          <Pressable style={styles.datePicker} onPress={() => setShowTo(true)}>
            <Text>Delivery</Text>
            <Text>{getDisplayDate(toDate)}</Text>
          </Pressable>
          <Pressable style={styles.timePicker} onPress={() => setShowTo(true)}>
            <Text>16:00</Text>
          </Pressable>
        </View>
      </View>
      {showFrom && <RNDateTimePicker value={fromDate} onChange={onFromDateChange} />}
      {showTo && <RNDateTimePicker value={toDate} onChange={onToDateChange} />}
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  heading: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    margin: 'auto',
  },
  inputWrapper: {
    backgroundColor: '#fff',
    height: 80,
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 16,
    padding: 8,
  },
  inputContent: {
    color: '#000',
    fontSize: 20,
  },
  focusInput: {
    borderColor: 'blue',
  },
  dateTimePickerContainer: {
    flexDirection: 'row',
    borderColor: '#fff',
    borderWidth: 1,
    gap: 8,
    borderRadius: 16,
  },
  datePicker: {
    flex: 2,
    borderWidth: 1,
    padding: 4,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 16,
  },
  timePicker: {
    flex: 1,
    borderWidth: 1,
    justifyContent: 'flex-end',
    padding: 4,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 16,
  },
})
