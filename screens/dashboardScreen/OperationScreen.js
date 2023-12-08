import React from 'react'
import { Text } from 'react-native'
import { styles } from '../../styles';
import { View } from 'react-native';
import DailyOperations from '../../components/dashboard/DailyOperations';
function OperationScreen() {
  
  return (
    <View style={styles.defaultContainer}>
      <DailyOperations/>
    </View>
  );
}

export default OperationScreen