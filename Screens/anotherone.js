// In your Homescreen.js file:
import {saveData, retrieveData, deleteData} from '../JSModules/AsyncStorage'
import React,{useRoute, useState} from 'react';
import { TouchableOpacity,Image,Text,View, TextInput, Button } from 'react-native';
import Container from '../components/Container';
import ActionButtonPlus from '../components/actionButtonplus';
import ActionButtonMinus from '../components/actionButtonminus';
import MainView from '../components/mainView';
import image1 from '../assets/snack-icon.png';

const AnotherScreen = ({route}) => {
  const [input,setInput] = useState()
  const [total,setTotal] = useState(0)
  // Access the parameters using the `route` prop
  return (
    <Container>
              <TextInput style={{color: 'white', fontSize:50}}
      placeholder="Enter a value"
      placeholderTextColor= 'black'
      onChangeText={(text) => {
        // Update the time state with the user-entered value
        setInput(Number(text));
      }}
    />
         <Button         
        title='submit'
        onPress={() => {setTotal(input)}}
        />
        <Text> {total} </Text>
    </Container>
  );
};

export default AnotherScreen;