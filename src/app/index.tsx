import { View, Text, StyleSheet } from 'react-native';

import BalancePanelLabel from '../components/BalancePanel/BalancePanelLabel';

const Main = () => {

  return (
    <View style = {styles.container}>
      <Text style = {styles.label}>Main Page</Text>
      <BalancePanelLabel></BalancePanelLabel>
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
