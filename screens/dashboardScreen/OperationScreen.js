import React , {useState} from "react";
import { Text } from "react-native";
import ProfileIndicator from "../../components/profileIndicator";
import DailyOperations from "../../components/dashboard/DailyOperations";
import { styles } from "../../styles";
import { View } from "react-native";
import ListOfOperations from "../../components/dashboard/ListOfOperations";
import { getAllOperations } from "../../axios/dashboard";
import { useDispatch, useSelector } from "react-redux"; 
import { updateOperationsAction } from "../../redux/actions/operations";
function OperationScreen({navigation}) {
 
 
   
  return (
    <View style={styles.defaultContainer}>
      <ProfileIndicator />
      <DailyOperations />
      <ListOfOperations navigation={navigation} />
    </View>
  );
}

export default OperationScreen;
