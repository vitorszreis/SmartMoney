import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import EntrySummaryChart from './entrySummaryChart'
import EntrySummaryList from './entrySummaryList'

const EntrySummary = () => {
  return (
    <View style = {styles.container}>
        <EntrySummaryChart />
        <EntrySummaryList />
    </View>
  )
}

export default EntrySummary;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})