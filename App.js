import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./app/navigation/DrawerNavigator";
import firestore from "@react-native-firebase/firestore";

export default function App() {
  const usersCollection = async () => {
    const data = await firestore().collection("Persons").get();
    console.log(data);
  };

  useEffect(() => {
    usersCollection();
  }, []);
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
