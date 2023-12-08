import React from 'react'
import { Image, Text, View } from 'react-native'
import { styles, whiteColor } from '../styles'

function ProfileIndicator () {
const userImage='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
const fullName='Chauffeur de test 1'
const email="driver_snowapp@gmail.com"
return (
    <View style={{alignItems:'center'}}>
      <Image 
      style={{
        width: 130,
        height: 130,
        borderRadius: 100,
        marginTop:15,
        borderColor:"#1DA1F2",
        borderWidth:1

      }}
      resizeMode="contain"

      source={{uri:userImage}}/>
      <Text style={{fontSize:19,textAlign:'center',marginTop:5,color:whiteColor}}>{fullName}</Text>
      <Text style={{color:whiteColor,fontSize:10,textAlign:'center'}}>{email}</Text>

    </View>
  )
}

export default ProfileIndicator
