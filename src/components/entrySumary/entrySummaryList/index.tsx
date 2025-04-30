import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

const EntrySummaryList = () => {
  return (
    <View style = {styles.container}>
      <Text style={styles.title}>Categorias</Text>
        <FlatList
  data={[
    {key: 'Alimentação: $201'},
    {key: 'Combustível: $12'},
    {key: 'Aluguel: $120'},
    {key: 'Lazer: $250'},
    {key: 'Outros: $1200'},
  ]}
  renderItem={({item}) => <Text style={styles.entry}>{item.key}</Text>}
/>

    </View>
  )
}

export default EntrySummaryList;

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,

    },
    entry:{
        fontSize:14,
    }
});