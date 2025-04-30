import { View, Text, StyleSheet } from "react-native";

import BalancePanel from "../components/BalancePanel";
import EntrySummary from "../components/entrySumary";

const Main = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}></Text>
      <BalancePanel/>
      <EntrySummary/>
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
