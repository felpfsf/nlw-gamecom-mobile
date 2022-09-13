import { StyleSheet } from 'react-native'
import { THEME } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    marginRight: 32
  },
  
  cover: {
    width: 240,
    height: 320,
    justifyContent: 'flex-end',
    borderRadius: 8,
    overflow: 'hidden'
  },
  
  footer: {
    width: '100%',
    height: 102,
    padding: 16,
    justifyContent: 'flex-end'
  },
  
  name: {
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    color: THEME.COLORS.TEXT
  },
  
  ads: {
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    color: THEME.COLORS.CAPTION_300
  }
})
