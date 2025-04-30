import { View, Text, StyleSheet } from "react-native";

import BalancePanel from "../components/BalancePanel";
import EntrySummary from "../components/entrySumary";
import EntryList from "../components/EntryList";

const Main = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}></Text>
      <BalancePanel/>
      <EntrySummary/>
      <EntryList/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  label: {
    fontSize: 20,
  },
});

export default Main;
