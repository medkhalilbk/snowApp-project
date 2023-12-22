import React from "react";
import { Text } from "react-native";
import ProfileIndicator from "../../components/profileIndicator";
import DailyOperations from "../../components/dashboard/DailyOperations";
import { styles } from "../../styles";
import { View } from "react-native";
import ListOfOperations from "../../components/dashboard/ListOfOperations";
import { getAllOperations } from "../../axios/dashboard";
import { useDispatch, useSelector } from "react-redux"; 
import { updateOperationsAction } from "../../redux/actions/operations";
function OperationScreen() {
  const userId = useSelector(state => state.user.informations.id)
  const dispatch = useDispatch()
  React.useEffect(() => {
  
    getAllOperations({userId:userId})
      .then((res) => {
       dispatch(updateOperationsAction(res));
      })
      .catch((err) => {
        console.log(err);
      });
  } , [])
  return (
    <View style={styles.defaultContainer}>
      <ProfileIndicator />
      <DailyOperations />
      <ListOfOperations />
    </View>
  );
}

export default OperationScreen;
