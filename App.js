import React from "react";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import AccountScreen from "./src/screens/AccountScreen";
import TrackDetailsScreen from "./src/screens/TrackDetailsScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const isSignedIn = false;
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Signin"
        screenOptions={{
          headerShown: false,
        }}
      >
        {!isSignedIn ? (
          <>
            <Stack.Screen name="Signin" component={SigninScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Account" component={AccountScreen} />
            <Stack.Screen name="Create" component={TrackCreateScreen} />
            <Stack.Screen name="Details" component={TrackDetailsScreen} />
            <Stack.Screen name="List" component={TrackListScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const ReduxApp = () => {
  <Provider store={store}>
    <App />
  </Provider>;
};

export default App;
