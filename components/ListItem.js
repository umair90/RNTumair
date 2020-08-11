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
import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";

const ListItem = ({
  item,
  AddCartItem,
  RemoveCartItem,
  deleteItem,
  filterItem,
}) => {
  //const [quanity, setQuantity] = useState("");
  const [counter, setCounter] = React.useState(0);
  const [selectedValue, setSelectedValue] = useState("");

  filterItem(selectedValue);

  const quanitObject = {
    id: null,
    quantity: 0,
  };

  //const onChangeQuant = (id, quanity) => setQuantity(id, quanity);
  let newP = Object.assign(quanitObject, item);

  const AddQty = (id) => {
    //setQuantity(id, 33);
    //quanity.id = id;
    //quanity.val = 33;
    //(quanitobj.id = 12), alert(quanitobj.id);
    // const newP = Object.assign(quanitObject, item);
    //console.log(newP);
    //newP[{ id }].quantity = 1;
    //console.log(newP);
    newP.quantity = counter + 1;
    //qaaa = newP.quantity;
    setCounter(newP.quantity);
    //newP.quantity = counter;
    //console.log(newP.quantity); // i am getting the pricex
    //setCounter(counter + 1);
    //console.log(counter);
    AddCartItem(newP);
    //console.log(newP);
  };

  const RemoveQty = (id) => {
    //setQuantity(id, 33);
    //quanity.id = id;
    //quanity.val = 33;
    //(quanitobj.id = 12), alert(quanitobj.id);
    // const newP = Object.assign(quanitObject, item);
    //console.log(newP);
    //newP[{ id }].quantity = 1;
    //console.log(newP);
    if (counter != 0) {
      //setCounter(counter - 1);
      newP.quantity = counter - 1;
      //qaaa = newP.quantity;
      setCounter(newP.quantity);
      RemoveCartItem(newP);
    }
    //console.log(counter); // i am getting the pricex
    //console.log(newP);
  };

  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Image
          style={styles.listItemImage}
          source={{
            uri: item.img,
          }}
        ></Image>
        <Text style={styles.listItemTextName}>{item.name}</Text>
        <Text style={styles.listItemTextPrice}>£{item.price}</Text>
        <AntDesign
          name="minuscircle"
          size={24}
          color="black"
          //   onPress={() => deleteItem(item.id)}
          onPress={() => RemoveQty(item.id)}
          //   onPress={() => {
          //     setCounter(counter - 1);
          //   }}
          //   title="Increment"
        />
        <Text style={styles.listItemTextQty}>{counter}</Text>
        <AntDesign
          name="pluscircle"
          size={24}
          color="black"
          onPress={() => AddQty(item.id)}
          //   onPress={() => {
          //     setCounter(counter + 1);
          //   }}
          //   title="Increment"
        />
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
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center",
  },
});

export default ListItem;
