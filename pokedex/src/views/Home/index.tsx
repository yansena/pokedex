import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { Box, Heading, VStack, Text, Button } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Header, HeaderTitle } from './styles';
import PokemonCard from '../../components/PokemonCard';


import { api } from '../../services/api';
import axios from 'axios';

interface Pokemon {
    name: string;
    url: string
}

export function Home() {
  const [ offsetList, setOffsetList ] = useState(0);
  const [ pokemonDetailList, setPokemonDetailList ] = useState([]);

  async function pokemonList(){

    const response = await api.get(`/pokemon?offset=${offsetList}&limit=10`);

    const newValue : Pokemon[]   = response.data.results;

    
    const pokelist = newValue.map(async (poke) => { 
    
      let newArray : [] = [];
      
      const url = poke.url
      
      await axios.get(url).then((response) => {
        const [tstArray] = response.data;
        console.log(tstArray)

        setPokemonDetailList(tstArray);
      });
      
      return newArray;
      
    });
    
    // console.log(pokelist);

    return pokelist;
  
  }

  function findMore(){
    setOffsetList( offsetList + 10)
    pokemonList();
  }
  
  
  useEffect(() => {
    pokemonList();
  });


  return (
    <VStack flex={1} pt={10} marginX={10}>
      <Header>
        <HeaderTitle > 
          Pokedex
        </HeaderTitle>
        <MaterialCommunityIcons name="pokeball" size={26} color="black" />
      </Header>
      <PokemonCard title="Pokemon"/>
      <FlatList 
        data={pokemonDetailList}
        renderItem={({ item }) => <PokemonCard title="Pokemon" data={item}/> }
        keyExtractor={(item, index) => `${index}`}
      /> 
      <Button onPress={findMore}/>
      {/* <Logo /> */}
    </VStack>
  )
}