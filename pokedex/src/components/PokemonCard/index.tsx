import { View, Text } from 'react-native'
import React from 'react'

export default function PokemonCard(props) {
  return (
    <View style={{ backgroundColor: 'red'}}>
      <Text>{props.data}</Text>
    </View>
  )
}