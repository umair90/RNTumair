import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList, Picker } from "react-native";

import ListItem from "./components/ListItem";
import Checkout from "./components/Checkout";

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [total, setTotal] = React.useState(0);
  const [selectedValue, setSelectedValue] = useState("All");
  let cartTotal = 0;

  //parsing json data
  useEffect(() => {
    fetch("https://my-json-server.typicode.com/benirvingplt/products/products")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  //add an item to cart
  const AddCartItem = (id) => {
    cartTotal = cartTotal + id.price;
    setTotal(cartTotal);
  };

  //remove an item from cart
  const RemoveCartItem = (id) => {
    cartTotal = cartTotal - id.price;
    setTotal(cartTotal);
  };

  //filter by colour
  const filterItem = (colour) => {
    setData((prevItems) => {
      return prevItems.filter((item) => item.colour == colour);
    });
  };

  //remove an item
  const deleteItem = (id) => {
    setData((prevItems) => {
      return prevItems.filter((item) => item.id != id);
    });
  };

  return (
    <View style={styles.container}>
      {/* picker fot filter by colour */}
      <Picker
        style={styles.picker}
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => filterItem(itemValue)}
      >
        <Picker.Item label="All" value="All" />
        <Picker.Item label="Black" value="Black" />
        <Picker.Item label="Stone" value="Stone" />
        <Picker.Item label="Red" value="Red" />
      </Picker>
      {/* rendering flatlist */}
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ListItem
            item={item}
            AddCartItem={AddCartItem}
            RemoveCartItem={RemoveCartItem}
            deleteItem={deleteItem}
          />
        )}
      />
      {/* total £ counter */}
      <Text style={styles.listItemTextTotal}>Total: £{total}</Text>
      <Checkout />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
  },
  listItemTextTotal: {
    fontSize: 22,
    textAlign: "center",
  },
  picker: {
    paddingTop: 0,
    textAlign: "center",
  },
});

export default App;
