import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Src/Screens/HomeScreen";
import DemoScreen from "./Src/Screens/DemoScreen";
import PaywallScreen from "./Src/Screens/PaywallScreen";

export type rootStackParamList = {
  Home: undefined;
  Paywall: undefined;
  Demo: undefined;
};

const Stack = createNativeStackNavigator<rootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeScreen}
        />

        <Stack.Screen
          options={{
            headerShown: false,
            presentation: "modal",
          }}
          name="Paywall"
          component={PaywallScreen}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="Demo"
          component={DemoScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
