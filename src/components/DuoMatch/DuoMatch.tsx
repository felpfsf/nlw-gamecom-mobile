import { View, Modal, ModalProps, Text, TouchableOpacity } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'

import { styles } from './DuoMatchStyles'
import { THEME } from '../../theme'
import { Heading } from '../Heading/Heading'

interface IProps extends ModalProps {
  discord: string
  onClose: () => void
}

export function DuoMatch({ discord, onClose, ...rest }: IProps) {
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
            <TouchableOpacity style={styles.discordBtn}>
              <Text style={styles.discordUserName}>{discord}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  )
}
