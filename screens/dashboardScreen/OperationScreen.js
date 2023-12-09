import React from "react";
import { Text } from "react-native";
import ProfileIndicator from "../../components/profileIndicator";
import DailyOperations from "../../components/dashboard/DailyOperations";
import { styles } from "../../styles";
import { View } from "react-native";

function OperationScreen() {
  return (
    <View style={styles.defaultContainer}>
      <ProfileIndicator />
      <DailyOperations />
    </View>
  );
}

export default OperationScreen;
