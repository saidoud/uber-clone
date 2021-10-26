import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import colors from "../configs/colors";
function CustomDrawer(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.container}>
        {/* User Information */}
        <View style={styles.userContainer}>
          <View style={styles.avatar} />
          <View>
            <Text style={{ color: colors.white, fontSize: 24 }}>Said Oud</Text>
            <Text style={{ color: colors.grey }}>8.00 *</Text>
          </View>
        </View>
        {/* Messages Section*/}
        <View style={styles.more}>
          <Pressable onPress={() => console.log("Messages")}>
            <Text style={{ color: colors.grey, paddingVertical: 5 }}>
              Messages
            </Text>
          </Pressable>
        </View>

        {/* Do More Section */}
        <Pressable onPress={() => console.log("Account Detail")}>
          <Text style={{ color: colors.grey, paddingVertical: 5 }}>
            Do more with your account
          </Text>
        </Pressable>

        <Pressable onPress={() => console.warn("Make Money")}>
          <Text style={{ color: colors.white, paddingVertical: 5 }}>
            Make Money driving
          </Text>
        </Pressable>
      </View>
      <DrawerItemList {...props} />

      {/* Logout */}
      <Pressable
        onPress={() => {
          console.warn("LogOut");
        }}
      >
        <Text style={{ padding: 5, paddingLeft: 20 }}>Logout</Text>
      </Pressable>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    padding: 15,
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    backgroundColor: colors.darkGrey,
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  more: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    paddingVertical: 5,
    marginVertical: 10,
    borderTopColor: colors.grey,
    borderBottomColor: colors.grey,
  },
});
export default CustomDrawer;
