import { Inter_200ExtraLight } from '@expo-google-fonts/inter'
import { StyleSheet } from 'react-native'
import { THEME } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.COLORS.OVERLAY,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    width: 311,
    marginVertical: 32,
    marginHorizontal: 40,
    backgroundColor: THEME.COLORS.SHAPE,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  info: {
    alignItems: 'center',
    marginVertical: 24
  },
  closeBtn: {
    alignSelf: 'flex-end',
    margin: 16
  },
  discordUserNameLabel: {
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    color: THEME.COLORS.TEXT,
    marginBottom: 8
  },
  discordBtn: {
    paddingVertical: 10,
    paddingHorizontal: 36,
    borderRadius: 8,
    backgroundColor: THEME.COLORS.BACKGROUND_900
  },
  discordUserName: {
    fontSize: THEME.FONT_SIZE.MD,
    color: THEME.COLORS.CAPTION_500,
    fontFamily: THEME.FONT_FAMILY.REGULAR
  },
})
