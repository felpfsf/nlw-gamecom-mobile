import { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation, useRoute } from '@react-navigation/native'

import { Entypo } from '@expo/vector-icons'
import { Background } from '../../components/Background/Background'
import logoImg from '../../assets/logo-nlw-esports.png'

import { styles } from './GameStyles'
import { IGameParams } from '../../@types/navigation'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import { THEME } from '../../theme'
import { Heading } from '../../components/Heading/Heading'
import { DuoCard, IDuoCardProps } from '../../components/DuoCard/DuoCard'

export function Game() {
  const [duos, setDuos] = useState<IDuoCardProps[]>([])
  const route = useRoute()
  const game = route.params as IGameParams
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }

  useEffect(() => {
    fetch(`http://192.168.15.16:3333/games/${game.id}/ads`)
      .then(response => response.json())
      .then(data => setDuos(data))
  }, [])

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name='chevron-thin-left'
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>
          <Image source={logoImg} style={styles.logo} />
          <View style={styles.divider} />
        </View>
        <Image
          source={{ uri: game.bannerUrl }}
          resizeMode='cover'
          style={styles.cover}
        />
        <Heading title={game.title} subtitle='Conecte-se e comece a jogar!' />
        <FlatList
          data={duos}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <DuoCard data={item} onConnect={() => {}} />
          )}
          ListEmptyComponent={() => (
            <Text style={styles.emptyList}>
              Não há anuncios publicados ainda
            </Text>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={[
            duos.length > 0 ? styles.contentList : styles.emptyListContent
          ]}
        />
      </SafeAreaView>
    </Background>
  )
}
