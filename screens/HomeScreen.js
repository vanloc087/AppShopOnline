import React from "react";
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Searchbar } from "react-native-paper";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import HomeSectionComponent from "../components/HomeSectionComponents";

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <View style={styles.screenContainer}>
      <StatusBar barStyle="light-content" />
      {/*  */}
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.brand}>DienThoaiTot</Text>
        </View>
        <View style={styles.headerInput}>
          <Searchbar
            style={styles.inputContainer}
            placeholder="Bạn cần tìm gì?"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
          {/*  */}
          <TouchableOpacity style={styles.cartContainer}>
            <FontAwesome name="shopping-cart" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      {/*  */}
      <View style={styles.bodyContainer}>
        <ScrollView>
          <HomeSectionComponent />
          <HomeSectionComponent />
          <HomeSectionComponent />
          <HomeSectionComponent />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: "column",
    paddingTop: 10,
    paddingBottom: 4,
    backgroundColor: "#1e88e5",
  },
  headerInput: {
    flexDirection: "row",
    backgroundColor: "#1e88e5",
  },
  brand: {
    fontSize: 30,
    color: "#fff",
    textAlign: "center",
  },
  inputContainer: {
    backgroundColor: "#fff",
    flexDirection: "row",
    flex: 1,
    marginLeft: 10,
    alignItems: "center",
    paddingHorizontal: 2,
    borderRadius: 2,
    height: 35,
  },
  inputText: {
    color: "#969696",
    fontSize: 14,
    marginLeft: 8,
    fontWeight: "500",
  },
  cartContainer: {
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  //
  bodyContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default HomeScreen;
