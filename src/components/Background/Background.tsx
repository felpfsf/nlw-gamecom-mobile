import { ImageBackground } from 'react-native'
import { styles } from './BackgroundStyles'
import bgImage from '../../assets/background-galaxy.png'

interface IProps {
  children: React.ReactNode
}

export function Background({ children }: IProps) {
  return (
    <ImageBackground
      source={bgImage}
      defaultSource={bgImage}
      style={styles.container}
    >
      {children}
    </ImageBackground>
  )
}
