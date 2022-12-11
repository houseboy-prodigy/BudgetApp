import {TouchableOpacity, Image, Text, View, Modal, StyleSheet, TextInput, Button} from 'react-native'
import image1 from '../assets/snack-icon.png'
import { useNavigation } from '@react-navigation/native';
import {useState} from 'react';
import ModalBox from './modalBox'

const ItemButton = (props) => {
  
  const [isModalVisible,setIsModalVisible] = useState(false)
  const [input, setInput] = useState()

  return(
    <View>
    <TouchableOpacity 
    style={{padding: 20, marginTop: 20, marginBottom: 20, marginLeft: 60, marginRight: 20}}
    onPress={() => {props.navigation.navigate('Modals')} }>
      <Image
        source={image1}
        style={{ width: 50, height: 50 }}
      />
    </TouchableOpacity>


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    marginTop: 200,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  input: {
    paddingTop: 10,
    borderColor: "grey",
    borderBottomWidth: 2,
  },
  button: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
  },
  modal: {
    width: "100%",
    height: "90%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ItemButton;