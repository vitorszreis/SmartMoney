import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import EntryListItem from "./EntryListItem";

const EntryList = () => {
  return (
    <View style = {styles.container}>
      <Text style={styles.title}>Ultimos Lançamentos</Text>
      <FlatList
        data={[
          { key: "Padaria Asa Branca: $10" },
          { key: "Supermercado Isadora: $190" },
          { key: "Posto Ipiranga: $190" },
        ]}
        renderItem={({ item }) => <Text style={styles.entry}>{item.key}</Text>}
      />
    </View>
  );
};

export default EntryList;

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
