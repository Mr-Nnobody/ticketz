import { View, Text, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.indexcontainer}>Welcome to Ticketz</Text>
      <Text style={styles.indexcontainer}>Your Smart Ticketer!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 50,
  },
  indexcontainer: {
    marginBottom: 20,
    textAlign: "center",
    borderBottomWidth: 2,
  },
});
