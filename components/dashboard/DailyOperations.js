import React from "react";
import { styles } from "../../styles";
import { View, Text } from "react-native";
import { ProgressChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => `rgba(29, 161, 242,  ${opacity})`,
};

const totalOperations = 12;
const totalHours = "3:33";
const stringOperation = `${totalOperations} Opérations`;
const stringOperationTime = ` ${totalHours} heures estimées`;

const data = {
  data: [0.4, 0.8],
};

function DailyOperations() {
  return (
    <View style={[styles.defaultContainer, { flex: 1, flexDirection: "row" }]}>
      <ProgressChart
        data={data}
        width={width / 2}
        height={120}
        strokeWidth={8}
        radius={32}
        chartConfig={chartConfig}
        hideLegend={true}
        style={{ alignSelf: "flex-start" }}
      />

      <View style={{ alignItems: "flex-start", paddingTop: 50 }}>
        <Text style={styles.chartText}>{stringOperation}</Text>
        <Text style={styles.chartText}>{stringOperationTime}</Text>
      </View>
    </View>
  );
}

export default DailyOperations;
