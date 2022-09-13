import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface IButtonProps {
  title: string
}

function Button(props: IButtonProps) {
  return (
    <TouchableOpacity style={styles.containerBtn}>
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <Text style={styles.title}>Hello React Native</Text>
      <Button title='Send 1'/>
      <Button title='Send 2'/>
      <Button title='Send 3'/>
    </View>
  )
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: '#fff',
    fontSize: 22
  },
  containerBtn:{
    backgroundColor: 'red',
    marginTop: 8,
    padding: 4,
    width: 160,
    alignItems: 'center',
    borderRadius: 10,  
  }
})
