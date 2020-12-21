import React from "react";

import { View, Text, StyleSheet, Button } from "react-native";

const SigninScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={{ fontSize: 50 }}>Sign in Screen</Text>
      <Button title="Move" onPress={() => navigation.navigate("Signup")} />
    </View>
  );
};

export default SigninScreen;
