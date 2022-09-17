import {
  View,
  Modal,
  ModalProps,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator
} from 'react-native'
import * as Clipboard from 'expo-clipboard'

import { MaterialIcons } from '@expo/vector-icons'

import { Heading } from '../Heading/Heading'

import { styles } from './DuoMatchStyles'
import { THEME } from '../../theme'
import { useState } from 'react'

interface IProps extends ModalProps {
  discord: string
  onClose: () => void
  // onPress: () => void
}

export function DuoMatch({ discord, onClose, ...rest }: IProps) {
  const [isCopying, setIsCopying] = useState(false)

  async function handleCopyToClipboard() {
    setIsCopying(true)
    await Clipboard.setStringAsync(discord)
    Alert.alert(
      `${discord}$ Copiado !`,
      'Nome de usuário copiado para a área de transferência'
    )
    setIsCopying(false)
  }

  return (
    <Modal animationType='fade' transparent statusBarTranslucent {...rest}>
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity style={styles.closeBtn}>
            <MaterialIcons
              name='close'
              size={20}
              color={THEME.COLORS.CAPTION_500}
              onPress={onClose}
            />
          </TouchableOpacity>
          <MaterialIcons
            name='check-circle-outline'
            size={64}
            color={THEME.COLORS.SUCCESS}
          />
          <Heading
            title='Let’s play!'
            subtitle='Agora é só começar a jogar!'
            style={{ alignItems: 'center', marginTop: 24 }}
          />
          <View style={styles.info}>
            <Text style={styles.discordUserNameLabel}>Adicione no Discord</Text>
            <TouchableOpacity
              style={styles.discordBtn}
              onPress={handleCopyToClipboard}
              disabled={isCopying}>
              <Text style={styles.discordUserName}>
                {isCopying ? (
                  <ActivityIndicator color={THEME.COLORS.PRIMARY} />
                ) : (
                  discord
                )}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  )
}
