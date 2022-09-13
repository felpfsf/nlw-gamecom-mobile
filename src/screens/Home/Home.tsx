import { View, Image, FlatList } from 'react-native'
import { styles } from './HomeStyles'

import { GAMES } from '../../utils/games'

import logoImg from '../../assets/logo-nlw-esports.png'
import { Heading } from '../../components/Heading/Heading'
import { GameCard } from '../../components/GameCard/GameCard'

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo} />
      <Heading
        title='Encontre seu duo!'
        subtitle='Selecione o game que deseja jogar...'
      />
      <FlatList
        data={GAMES}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <GameCard data={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentList}
      />
    </View>
  )
}
