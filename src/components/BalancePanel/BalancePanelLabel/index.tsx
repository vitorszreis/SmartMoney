import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const BalancePanelLabel = () => {
  return (
    <View style = {styles.container}>
      <Text style ={styles.label}>Saldo atual</Text>
      <Text style = {styles.value}>$2.102,45</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
      label: {

    },
     value: {

     }
});

export default BalancePanelLabel;