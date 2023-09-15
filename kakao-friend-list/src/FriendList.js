import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Profile from './Profile'
import { getBottomSpace } from 'react-native-iphone-x-helper'
import Margin from './Margin';

const bottomSpace = 40;
console.log(bottomSpace);

const FriendList = (props) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: bottomSpace }}>
      {props.data.map((item, index)=>(
        <View key={index}>
          <Profile
          uri={item.uri}
          name={item.name}
          intro={item.introduction}
          />
          <Margin height={10} />
        </View>
      ))}
    </ScrollView>
  )
}

export default FriendList