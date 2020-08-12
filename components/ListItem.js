import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Picker,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const ListItem = ({ item, AddCartItem, RemoveCartItem, deleteItem }) => {
  const [counter, setCounter] = React.useState(0);

  const quanitObject = {
    id: null,
    quantity: 0,
  };

  let newP = Object.assign(quanitObject, item);

  //adding a quantity
  const AddQty = (id) => {
    newP.quantity = counter + 1;
    setCounter(newP.quantity);
    AddCartItem(newP);
  };

  // removing quantity
  const RemoveQty = (id) => {
    if (counter != 0) {
      newP.quantity = counter - 1;
      setCounter(newP.quantity);
      RemoveCartItem(newP);
    }
  };

  return (
    // flatlist items
    <TouchableOpacity style={styles.listItem}>
      {/* item image */}
      <View style={styles.listItemView}>
        <Image
          style={styles.listItemImage}
          source={{
            uri: item.img,
          }}
        ></Image>
        {/* item name */}
        <Text style={styles.listItemTextName}>{item.name}</Text>
        {/* item price */}
        <Text style={styles.listItemTextPrice}>£{item.price}</Text>
        {/* remove icon */}
        <AntDesign
          name="minuscircle"
          size={24}
          color="black"
          onPress={() => RemoveQty(item.id)}
        />
        <Text style={styles.listItemTextQty}>{counter}</Text>
        {/* add icon */}
        <AntDesign
          name="pluscircle"
          size={24}
          color="black"
          onPress={() => AddQty(item.id)}
        />
        {/* remove button */}
        <MaterialIcons
          name="remove-shopping-cart"
          size={24}
          color="black"
          onPress={() => deleteItem(item.id)}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  listItemView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listItemTextName: {
    fontSize: 12,
    paddingLeft: 5,
    paddingRight: 0,
    flexBasis: 100,
  },
  listItemTextPrice: {
    fontSize: 22,
  },
  listItemTextQty: {
    fontSize: 12,
  },
  listItemImage: {
    height: 80,
    width: 80,
  },
});

export default ListItem;
