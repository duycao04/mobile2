import React, { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
  Text,
} from "react-native";
import Swiper from "react-native-swiper";
import { ThemedText } from "@/components/ThemedText";

const { width: windowWidth } = Dimensions.get("window");

type SliderImage = {
  id: number;
  source: any;
};

const sliderImages: SliderImage[] = [
  { id: 1, source: require("@/assets/images/banner1.webp") },
  { id: 2, source: require("@/assets/images/banner1.webp") },
  { id: 3, source: require("@/assets/images/banner1.webp") },
];

const products = [
  { id: 1, name: "Product 1", image: require("@/assets/images/pro1.webp") },
  { id: 2, name: "Product 2", image: require("@/assets/images/pro1.webp") },
  { id: 3, name: "Product 3", image: require("@/assets/images/pro1.webp") },
  { id: 4, name: "Product 4", image: require("@/assets/images/pro1.webp") },
];

const categories = [
  { id: 1, name: "Áo Nam" },
  { id: 2, name: "Áo Nữ" },
  { id: 3, name: "Quần Nam" },
  { id: 4, name: "Quần Nam" },
  { id: 5, name: "Quần Nam" },
  { id: 6, name: "Quần Nam" },
];

const HomeScreen: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % sliderImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleCategoryPress = (categoryName: string) => {
    console.log(`Selected category: ${categoryName}`);
    // Add logic to handle category selection here
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.searchContainer}>
        <Image
          source={require("@/assets/images/favicon.png")}
          style={styles.logo}
        />
        <TextInput style={styles.searchInput} placeholder="Tìm kiếm . . . " />
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.search}>Search</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.sliderContainer}>
        <Swiper
          autoplay
          loop
          showsPagination={true}
          onIndexChanged={(index: number) => setActiveSlide(index)}
        >
          {sliderImages.map((image) => (
            <Image
              key={image.id}
              source={image.source}
              style={styles.sliderImage}
              resizeMode="cover"
            />
          ))}
        </Swiper>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesContainer}
      >
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={styles.categoryCard}
            onPress={() => handleCategoryPress(category.name)}
          >
            <Text style={styles.categoryText}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Text style={styles.title}>Sản phẩm nổi bật</Text>
      <View style={styles.productsContainer}>
        {products.map((product) => (
          <View key={product.id} style={styles.productCard}>
            <Image source={product.image} style={styles.productImage} />
            <Text style={styles.proname}>{product.name}</Text>
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addcart}>Add Cart</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#FFF",
  },
  search: {
    color: "#FFF",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  proname: {
    color: "#FFF",
    marginTop: 5,
    marginBottom: 3,
    fontSize: 16,
  },
  searchInput: {
    flex: 1,
    borderColor: "#CFCFCF",
    borderWidth: 1,
    borderRadius: 14,
    padding: 8,
  },
  searchButton: {
    marginLeft: 8,
    color: "white",
    backgroundColor: "black",
    padding: 10,
    borderRadius: 15,
  },
  sliderContainer: {
    height: 200,
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 16,
  },
  sliderImage: {
    height: "100%",
    width: "100%",
  },
  title: {
    textTransform: "uppercase",
    fontWeight: "bold",
    borderBottomColor: "black",
    color: "#FFA500",
    fontSize: 20,
    marginBottom: 12,
  },
  categoriesContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  categoryCard: {
    fontSize: 12,
    marginHorizontal: 6,
    width: 90,
    color: "white",
    backgroundColor: "black",
    borderRadius: 30,
    padding: 8, // Add padding for better touch area
    alignItems: "center",
    marginBottom: 10,
  },
  addcart: { color: "black", fontSize: 13, fontWeight: "bold" },
  productsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  productCard: {
    fontSize: 18,
    width: "48%",
    backgroundColor: "#363636",
    borderRadius: 6,
    padding: 8,
    marginBottom: 15,
    alignItems: "center",
  },
  productImage: {
    objectFit: "fill",
    backgroundColor: "white",
    height: 100,
    width: "100%",
    borderRadius: 6,
  },
  addButton: {
    paddingLeft: 10,
    justifyContent: "flex-end",
    marginTop: 8,
    backgroundColor: "#EE7621",
    padding: 6,
    borderRadius: 6,
    alignItems: "center",
  },
  categoryText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 12,
    textAlign: "center",
  },
});

export default HomeScreen;
