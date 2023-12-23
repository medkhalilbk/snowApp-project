import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native'
function OperationDetailScreen({route}) {
  return (
     <View><Text>{JSON.stringify(route.params)}</Text></View>
  )
}

export default OperationDetailScreen