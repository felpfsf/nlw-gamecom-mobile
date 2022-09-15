import { useEffect, useState } from 'react'
import { Image, FlatList, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

import { styles } from './HomeStyles'
import logoImg from '../../assets/logo-nlw-esports.png'

import { Heading } from '../../components/Heading/Heading'
import { GameCard, IGameCardProps } from '../../components/GameCard/GameCard'
import { Background } from '../../components/Background/Background'

export function Home() {
  const [games, setGames] = useState<IGameCardProps[]>([])

  const navigation = useNavigation()

  useEffect(() => {
    fetch('http://192.168.15.16:3333/games')
      .then(response => response.json())
      .then(data => setGames(data))
  }, [])

  function handleOpenGame({ id, title, bannerUrl }: IGameCardProps) {
    navigation.navigate('game', { id, title, bannerUrl })
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={logoImg} style={styles.logo} />
        <Heading
          title='Encontre seu duo!'
          subtitle='Selecione o game que deseja jogar...'
        />
        <FlatList
          data={games}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <GameCard data={item} onPress={() => handleOpenGame(item)} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentList}
        />
      </SafeAreaView>
    </Background>
  )
}
