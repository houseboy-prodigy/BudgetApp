import {TouchableOpacity, View, Text, Image, StyleSheet,TextInput} from 'react-native'
import image1 from '../assets/snack-icon.png'
const MainView = (props) => {
  return(
      <View style={{flex: 3}}>
        <Text style={styles.MainText}> {props.modaltext} </Text>
            <TextInput style={{color: 'white', fontSize:30}}
      placeholder="Enter the Budget value"
      placeholderTextColor='white'
      onChangeText={(text) => {
        // Update the time state with the user-entered value
        setInput(Number(text));
      }}
    />
        <Text style={styles.subtext}> budget stats </Text>
      </View>
  )
}


const styles = StyleSheet.create({
  MainText:{
    fontSize: 50,
    position: 'absolute',
    top: 100,
    alignContent:'center',
    padding: 20,
    color: 'white'
  },
    subtext:{
    fontSize: 25,
    position: 'absolute',
    top: 400,
    alignContent:'center',
    padding: 20,
    color: 'white'
  }
})
export default MainView;