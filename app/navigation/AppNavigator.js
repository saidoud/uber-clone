import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DestinationSearch from "../screens/DestinationSearch";
import Home from "../screens/Home";
import SearchResult from "../screens/SearchResult";

const Stack = createNativeStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="DestinationSearch" component={DestinationSearch} />
    <Stack.Screen name="SearchResult" component={SearchResult} />
  </Stack.Navigator>
);

export default AppNavigator;
