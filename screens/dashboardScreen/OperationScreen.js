import React from 'react'
import { Text } from 'react-native'

function OperationScreen() {
  
  return (
    <View style={styles.defaultContainer}>
      <ProfileIndicator />
      <DailyOperations />
    </View>
  );
}

export default OperationScreen