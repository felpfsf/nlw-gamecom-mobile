import { Inter_700Bold } from '@expo-google-fonts/inter'
import { StyleSheet } from 'react-native'
import { THEME } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  header: {
    width: '100%',
    marginTop: 28,
    paddingHorizontal: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  logo: {
    width: 72,
    height: 40
  },
  divider: {
    width: 20,
    height: 20
  },
  cover: {
    width: 311,
    height: 160,
    marginTop: 32,
    borderRadius: 8
  },
  contentList: {
    paddingLeft: 32,
    paddingRight: 64
  },
  emptyList: {
    textAlign: 'center',
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.BOLD
  },
  emptyListContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
