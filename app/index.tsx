import { StatusBar } from 'expo-status-bar'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import RNDateTimePicker, { type DateTimePickerEvent } from '@react-native-community/datetimepicker'
import { useState } from 'react'
import { intlFormat } from 'date-fns'
import { AccessibleTextInput } from '../components/AccessibleTextInput'
import FontAwesome from '@expo/vector-icons/FontAwesome'

export default function App() {
  const [fromDate, setFromDate] = useState(new Date())
  const [fromTime, setFromTime] = useState(new Date())
  const [showFrom, setShowFrom] = useState(false)
  const [showFromTime, setShowFromTime] = useState(false)

  const [toDate, setToDate] = useState(new Date())
  const [showTo, setShowTo] = useState(false)
  const [toTime, setToTime] = useState(new Date())
  const [showToTime, setShowToTime] = useState(false)

  const onFromDateChange = (event: DateTimePickerEvent, selectedDate: Date | undefined) => {
    setShowFrom(false)
    if (selectedDate) setFromDate(selectedDate)
  }
  const onToDateChange = (event: DateTimePickerEvent, selectedDate: Date | undefined) => {
    setShowTo(false)
    if (selectedDate) setToDate(selectedDate)
  }

  const onFromTimeChange = (event: DateTimePickerEvent, selectedTime: Date | undefined) => {
    setShowFromTime(false)
    if (selectedTime) setFromTime(selectedTime)
  }
  const onToTimeChange = (event: DateTimePickerEvent, selectedTime: Date | undefined) => {
    setShowToTime(false)
    if (selectedTime) setToTime(selectedTime)
  }

  const getDisplayDate = (date: Date) => {
    return intlFormat(date, {
      day: 'numeric',
      month: 'long',
    })
  }
  const getDisplayTime = (date: Date) => {
    return intlFormat(date, {
      hour: 'numeric',
      minute: 'numeric',
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
            <Text style={styles.dateTimePickerText}>{getDisplayDate(fromDate)}</Text>
          </Pressable>
          <Pressable style={styles.timePicker} onPress={() => setShowFromTime(true)}>
            <Text style={styles.dateTimePickerText}>{getDisplayTime(fromTime)}</Text>
          </Pressable>
        </View>
        <View style={styles.dateTimePickerContainer}>
          <Pressable style={styles.datePicker} onPress={() => setShowTo(true)}>
            <Text>Delivery</Text>
            <Text style={styles.dateTimePickerText}>{getDisplayDate(toDate)}</Text>
          </Pressable>
          <Pressable style={styles.timePicker} onPress={() => setShowToTime(true)}>
            <Text style={styles.dateTimePickerText}>{getDisplayTime(toTime)}</Text>
          </Pressable>
        </View>
        <Pressable
          style={{ backgroundColor: '#00a6db', borderRadius: 12, padding: 16, borderWidth: 2, borderColor: 'white' }}
          android_ripple={{ color: '#7adafa' }}
        >
          <Text style={{ fontSize: 20, color: '#fff', margin: 'auto', fontWeight: 'bold' }}>Find a car</Text>
        </Pressable>
      </View>
      {showFrom && <RNDateTimePicker value={fromDate} onChange={onFromDateChange} />}
      {showFromTime && <RNDateTimePicker value={fromTime} mode="time" onChange={onFromTimeChange} />}
      {showTo && <RNDateTimePicker value={toDate} onChange={onToDateChange} />}
      {showToTime && <RNDateTimePicker value={toTime} mode="time" onChange={onToTimeChange} />}
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
  heading: {
    fontSize: 36,
    fontWeight: 'bold',
    margin: 'auto',
  },
  inputWrapper: {
    backgroundColor: '#fff',
    height: 80,
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 12,
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
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: 'gray',
    gap: 8,
    borderRadius: 12,
    paddingLeft: 4,
    paddingRight: 4,
  },
  datePicker: {
    flex: 2,
    padding: 8,
    borderRadius: 12,
  },
  dateTimePickerText: {
    fontSize: 20,
  },
  timePicker: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 8,
    borderRadius: 12,
  },
})
