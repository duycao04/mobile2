import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  Text,
} from "react-native";
import { ThemedText } from "@/components/ThemedText";

type CartItem = {
  id: number;
  name: string;
  image: any;
  price: number;
  quantity: number; // New property for quantity
};

type Product = {
  id: number;
  name: string;
  image: any;
  price: number;
};

const products: Product[] = [
  {
    id: 1,
    name: "Cappucino 1",
    image: require("@/assets/images/pro1.webp"),
    price: 10.0,
  },
  {
    id: 2,
    name: "Cappucino 2",
    image: require("@/assets/images/pro1.webp"),
    price: 15.0,
  },
  {
    id: 3,
    name: "Cappucino 3",
    image: require("@/assets/images/pro1.webp"),
    price: 20.0,
  },
  {
    id: 4,
    name: "Cappucino 4",
    image: require("@/assets/images/pro1.webp"),
    price: 25.0,
  },
];

const CartScreen: React.FC<{ route: any }> = ({ route }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(
    route?.params?.cartItems || []
  );

  const calculateTotal = (): string => {
    return cartItems
      .reduce(
        (total: number, item: CartItem) => total + item.price * item.quantity,
        0
      )
      .toFixed(2);
  };

  const addToCart = (product: Product) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === product.id
    );
    if (existingItemIndex > -1) {
      const updatedItems = [...cartItems];
      updatedItems[existingItemIndex].quantity += 1; // Increase quantity if already in cart
      setCartItems(updatedItems);
    } else {
      setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]); // Add new item with quantity 1
    }
  };

  const removeFromCart = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
    } else {
      const updatedItems = cartItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );
      setCartItems(updatedItems);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Giỏ hàng</Text>
      {cartItems.length === 0 ? (
        <Text style={styles.emptyCartText}>
          Giỏ hàng của bạn hiện đang trống.
        </Text>
      ) : (
        <>
          {cartItems.map((item: CartItem) => (
            <View key={item.id} style={styles.itemContainer}>
              <Image source={item.image} style={styles.itemImage} />
              <View style={styles.itemDetails}>
                <Text style={styles.nameText}>${item.name}</Text>
                <Text style={styles.priceText}>${item.price.toFixed(2)}</Text>
                <View style={styles.quantityContainer}>
                  <TouchableOpacity
                    onPress={() => updateQuantity(item.id, item.quantity - 1)}
                    style={styles.quantityButton}
                  >
                    <Text style={styles.quantityButton}>-</Text>
                  </TouchableOpacity>
                  <TextInput
                    style={styles.quantityInput}
                    value={String(item.quantity)}
                    keyboardType="numeric"
                    onChangeText={(text) =>
                      updateQuantity(item.id, Number(text))
                    }
                  />
                  <TouchableOpacity
                    onPress={() => updateQuantity(item.id, item.quantity + 1)}
                    style={styles.quantityButton}
                  >
                    <Text style={styles.quantityButton}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => removeFromCart(item.id)}
              >
                <Text style={styles.removeButton}>Xóa</Text>
              </TouchableOpacity>
            </View>
          ))}
          <View style={styles.totalContainer}>
            <Text style={styles.total}>Total: ${calculateTotal()}</Text>
          </View>
          <TouchableOpacity style={styles.checkoutButton}>
            <Text style={styles.checkoutText}>Proceed to Checkout</Text>
          </TouchableOpacity>
        </>
      )}

      <Text style={styles.title}>Tất cả sản phẩm</Text>
      {products.map((product) => (
        <View key={product.id} style={styles.productContainer}>
          <Image source={product.image} style={styles.productImage} />
          <View style={styles.productDetails}>
            <Text style={styles.smallProductName}>{product.name}</Text>
            <Text style={styles.priceText}>${product.price.toFixed(2)}</Text>
          </View>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => addToCart(product)}
          >
            <Text style={styles.addButton}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#FFF",
  },
  image: {
    width: 200,
  },
  title: {
    textTransform: "uppercase",
    marginTop: 6,
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
  },
  emptyCartText: {
    fontSize: 20,
    textAlign: "center",
    marginVertical: 20,
    color: "black",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
  },
  total: {
    fontSize: 20,
  },
  nameText: { fontSize: 20, marginBottom: 5 },
  removeButton: {
    backgroundColor: "#FF3333",
    borderRadius: 5,
    color: "white",
    padding: 7,
    paddingVertical: 8,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  totalContainer: {
    marginTop: 20,
    alignItems: "flex-end",
  },
  checkoutButton: {
    marginTop: 20,
    backgroundColor: "#00AA00",
    borderRadius: 5,
    marginHorizontal: 30,
    padding: 10,
    alignItems: "center",
  },
  checkoutText: {
    color: "#FFFFFF",
    fontWeight: "semibold",
    fontSize: 15,
  },
  productContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  productImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 10,
  },
  productDetails: {
    flex: 1,
  },
  smallProductName: {
    fontSize: 14,
    fontWeight: "500",
  },
  addButton: {
    backgroundColor: "#EE7621",
    color: "#FFFFFF",
    borderRadius: 5,
    padding: 5,
    alignItems: "center",
  },
  priceText: {
    color: "#000000",
    fontWeight: "500",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  quantityButton: {
    backgroundColor: "#002200",
    color: "#FFFFFF",
    borderRadius: 5,
    padding: 2,
    alignItems: "center",
    marginHorizontal: 5,
  },
  quantityInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    width: 40,
    textAlign: "center",
  },
});

export default CartScreen;
