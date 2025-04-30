import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BalancePanelLabel from './BalancePanelLabel'
import BalancePanelChart from './BalancePanelChart'


const BalancePanel = () => {
  return (
    <View>
      <BalancePanelLabel></BalancePanelLabel>
      <BalancePanelChart></BalancePanelChart>
    </View>
  )
}

export default BalancePanel

const styles = StyleSheet.create({})