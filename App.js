import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import Header from "./components/header";
import ListItem from "./components/ListItem";
import AddItem from "./components/AddItem";
import { Alert } from "react-native";

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [total, setTotal] = React.useState(0);
  let cartTotal = 0;

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/benirvingplt/products/products")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const AddCartItem = (id) => {
    cartTotal = cartTotal + id.price;
    setTotal(cartTotal);
  };

  const RemoveCartItem = (id) => {
    cartTotal = cartTotal - id.price;
    setTotal(cartTotal);
  };

  const deleteItem = (id) => {
    setData((prevItems) => {
      return prevItems.filter((item) => item.id != id);
    });
  };

  const filterItem = (id) => {
    console.log(id);
  };

  const addItem = (id, colour, name, price, imag, qyt) => {
    console.log(colour);
    setItems((prevItems) => {
      return [{ id, colour, name, price, imag, qyt }, ...prevItems];
    });
  };

  return (
    <View style={styles.container}>
      <Header filterItem={filterItem} />
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ListItem
            item={item}
            AddCartItem={AddCartItem}
            RemoveCartItem={RemoveCartItem}
            deleteItem={deleteItem}
            filterItem={filterItem}
          />
        )}
      />
      <Text style={styles.listItemTextTotal}>Total: £{total}</Text>
      <AddItem addItem={addItem} />
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
});

export default App;
