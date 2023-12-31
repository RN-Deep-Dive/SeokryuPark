import { View, Text, Image } from 'react-native'
import React from 'react'
import Margin from './Margin'

const Profile = (props) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Image source={{ uri: props.uri }} style={{ width: 50, height: 50, borderRadius: 20 }}/>
      <View style={{ justifyContent: 'center', marginLeft: 10 }}>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>{props.name}</Text>
        <Margin height={6} />
        <Text style={{ fontSize: 12, color: 'grey' }}>{props.intro}</Text>
      </View>
    </View>
  )
}

export default Profile