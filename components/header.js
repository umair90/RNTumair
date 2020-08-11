import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Picker } from "react-native";
import { useState } from "react";

const Header = ({ item, filterItem }) => {
  const [selectedValue, setSelectedValue] = useState("");
  //console.log(selectedValue);
  filterItem(selectedValue);

  return (
    // <View style={styles.header}>
    //   <Text style={styles.text}> Shopping List </Text>
    // </View>
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        // style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="All" value="All" />
        <Picker.Item label="Black" value="Black" />
        <Picker.Item label="Stone" value="Stone" />
        <Picker.Item label="Red" value="Red" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 10,
    backgroundColor: "darkslateblue",
  },
  text: {
    color: "#fff",
    fontSize: 23,
    textAlign: "center",
  },
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center",
  },
});

export default Header;
