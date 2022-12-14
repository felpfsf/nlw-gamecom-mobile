import { ColorValue, Text, View } from 'react-native'
import { THEME } from '../../theme'

import { styles } from './DuoInfoStyles'

interface IProps {
  label: string
  value: string | boolean
  colorValue?: ColorValue
}

export function DuoInfo({
  label,
  value,
  colorValue = THEME.COLORS.TEXT
}: IProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={[styles.value, { color: colorValue }]} numberOfLines={1}>
        {value}
      </Text>
    </View>
  )
}
