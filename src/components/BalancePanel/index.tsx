import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import BalancePanelLabel from "./BalancePanelLabel";
import BalancePanelChart from "./BalancePanelChart";

const BalancePanel = () => {
  return (
    <View style={styles.container}>
      <BalancePanelLabel></BalancePanelLabel>
      <BalancePanelChart></BalancePanelChart>
      <Button title="Adicionar" />
    </View>
  );
};

export default BalancePanel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
