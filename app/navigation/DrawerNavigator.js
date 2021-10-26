import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AppNavigator from "./AppNavigator";
import { Text, View } from "react-native";
import CustomDrawer from "./CustomDrawer";

const Drawer = createDrawerNavigator();

const TestScreem = ({ name }) => (
  <View
    style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
  >
    <Text>{name}</Text>
  </View>
);

const DrawerNavigator = () => (
  <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
    <Drawer.Screen name="home" component={AppNavigator} />
    <Drawer.Screen name="Yours Tips">
      {() => <TestScreem name="Yours Tips" />}
    </Drawer.Screen>
    <Drawer.Screen name="Help">
      {() => <TestScreem name="Help" />}
    </Drawer.Screen>

    <Drawer.Screen name="Wallet">
      {() => <TestScreem name="Wallet" />}
    </Drawer.Screen>
  </Drawer.Navigator>
);

export default DrawerNavigator;
