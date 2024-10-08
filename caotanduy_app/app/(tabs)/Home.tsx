///
import { Link } from "expo-router";
import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { rgbaColor } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

// import { HelloWave } from "@/components/HelloWave";
// import ParallaxScrollView from "@/components/ParallaxScrollView";
// import { ThemedText } from "@/components/ThemedText";
// import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={require("../../assets/images/OIF-removebg-preview.png")}
        />
      </View>

      <View>
        <Text style={styles.signin}>Sign In!</Text>
      </View>
      <View>
        <Text style={styles.text}>User Name</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Type here"
          keyboardType="numeric"
        />
      </View>
      <View>
        <Text style={styles.text}>Password</Text>
        <TextInput
          secureTextEntry
          style={styles.textInput}
          placeholder="Type here"
          keyboardType="numeric"
        />
      </View>
      <View>
        <Link href="./signup">Sign Up!</Link>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#9BF6F9",
    padding: 30,
    width: "100%",
    height: "100%",
  },
  text: {
    width: 300,
    marginTop: 20,
    color: "green",
    alignItems: "center",
  },
  // titleContainer: {
  //   flexDirection: "row",
  //   alignItems: "center",
  //   gap: 8,
  // },
  // stepContainer: {
  //   gap: 8,
  //   marginBottom: 8,
  // },
  // reactLogo: {
  //   height: 178,
  //   width: 290,
  //   bottom: 0,
  //   left: 0,
  //   position: "absolute",
  // },
  image: {
    alignItems: "center",
    width: 320,
    height: 100,
  },
  signin: {
    fontFamily: "sans-ser",
    alignItems: "center",
    fontSize: 30,
    marginTop: 20,
    width: 100,
    height: "auto",
  },
  button: {
    alignItems: "center",
    width: 100,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: "gray",
    padding: 10,
  },
  buttonText: {},
});
