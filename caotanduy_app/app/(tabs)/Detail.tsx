import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Picker, // For size selection dropdown
} from "react-native";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1); // For quantity adjustment
  const [selectedSize, setSelectedSize] = useState("M"); // For size selection

  const product = {
    name: "Áo Nam Cao Cấp",
    description:
      "Áo thun thể thao chất liệu cao cấp, thoáng mát, phù hợp cho việc tập luyện và hoạt động ngoài trời.",
    price: "300,000 VND",
    imageUrl: require("../../assets/images/pro1.webp"), // Local image using require()
  };

  // Handler to increase quantity
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Handler to decrease quantity (cannot go below 1)
  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <ScrollView style={styles.container}>
      {/* Product Image */}
      <Image source={product.imageUrl} style={styles.productImage} />

      {/* Product Name */}
      <Text style={styles.productName}>{product.name}</Text>

      {/* Product Price */}
      <Text style={styles.productPrice}>{product.price}</Text>

      {/* Product Description */}
      <Text style={styles.productDescription}>{product.description}</Text>

      {/* Size Selector */}
      <View style={styles.sizeContainer}>
        <Text style={styles.label}>Chọn Kích Cỡ: </Text>
        <Picker
          selectedValue={selectedSize}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedSize(itemValue)}
        >
          <Picker.Item label="S" value="S" />
          <Picker.Item label="M" value="M" />
          <Picker.Item label="L" value="L" />
          <Picker.Item label="XL" value="XL" />
        </Picker>
      </View>

      {/* Quantity Adjustment */}
      <View style={styles.quantityContainer}>
        <Text style={styles.label}>Số Lượng: </Text>
        <View style={styles.quantityControls}>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={decreaseQuantity}
          >
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={increaseQuantity}
          >
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Buy Now Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Mua Ngay</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F0F8FF",
  },
  productImage: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
    borderRadius: 8,
    marginBottom: 16,
  },
  productName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 20,
    color: "#FF6347",
    marginBottom: 16,
  },
  productDescription: {
    fontSize: 16,
    color: "#666",
    marginBottom: 24,
  },
  sizeContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  picker: {
    height: 25,
    width: 100,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  quantityControls: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityButton: {
    backgroundColor: "black",
    width: 25,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
  },
  quantityButtonText: {
    fontSize: 18,
    color: "white",
  },
  quantityText: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  button: {
    marginTop: 40,
    borderRadius: 6,
    color: "white",
    width: "100%",
    padding: 16,
    backgroundColor: "#EE7621",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});

export default ProductDetail;
