import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Checkout = ({}) => {
  return (
    <View>
      <TouchableOpacity style={styles.btn}>
        {/* checkout button  */}
        <Text style={styles.btnText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

// button and text styles
const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#c2bad8",
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: "darkslateblue",
    fontSize: 20,
    textAlign: "center",
  },
});

export default Checkout;
