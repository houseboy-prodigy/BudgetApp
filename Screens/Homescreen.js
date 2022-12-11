// In your Homescreen.js file:

import React,{useState} from 'react';
import { TouchableOpacity,Image, View, Text, TextInput,StyleSheet,Button } from 'react-native';
import Container from '../components/Container';
import ActionButtonPlus from '../components/actionButtonplus';
import ActionButtonMinus from '../components/actionButtonminus';
import MainView from '../components/mainView';
import image1 from '../assets/snack-icon.png';
import { useNavigation } from '@react-navigation/native';
//import AsyncStorage from '@react-native-community/async-storage';
const Homescreen = ({navigation,route}) => {
  const [textInputValue, setTextInputValue] = useState('');
  // To set the value on Text
  const [getValue, setGetValue] = useState('');
  const [budget, setBudget] = useState(0)
  const getValueFunction = () => {
    //function to get the value from AsyncStorage
    AsyncStorage.getItem('any_key_here').then(
      (value) =>
        //AsyncStorage returns a promise so adding a callback to get the value
        setBudget(value)
      //Setting the value in Text
    );
  };
  const onPressHandle = () => {
    //function to save the value in AsyncStorage
    if (textInputValue) {
      //To check the input not empty
      AsyncStorage.setItem('any_key_here', textInputValue);
      //Setting a data to a AsyncStorage with respect to a key
      setTextInputValue('');
      //Resetting the TextInput
      alert('Data Saved');
      //alert to confirm
    } else {
      alert('Please fill data');
      //alert for the empty InputText
    }
  };

if(route.params==undefined){
  return (
    <Container>
    <ActionButtonPlus/>
         <View style={{flex: 3}}>
      <Text style={styles.MainText}> {`$${budget}`} </Text>
        <TextInput style={{color: 'white', fontSize:30}}
      placeholder="Enter the Budget value"
      placeholderTextColor='white'
      onChangeText={(text) => {
        // Update the time state with the user-entered value
        setTextInputValue((text));
      }}
    />
      <Button         
        title='submit'
        onPress={onPressHandle}
        />
              <Button         
        title='retreive'
        onPress={getValueFunction}
        />
      </View>
      
      <ActionButtonMinus />
    </Container>
  )
  }
  else{
    const { key, valToAdd } = route.params;
    console.log(key,valToAdd)
    const updatedBudget = Number(budget) + Number(valToAdd)
    if(key == 'Add'){
    return(
    <Container>
    <ActionButtonPlus/>
    <MainView modaltext={updatedBudget}/>
      <ActionButtonMinus />
    </Container>
    )
  }
  else{
    const { key, valToMinus } = route.params;
    console.log(key,valToMinus)
    const updatedBudget = Number(budget) - Number(valToMinus)
        return(
    <Container>
    <ActionButtonPlus/>
      <MainView modaltext={updatedBudget}/>
      <ActionButtonMinus />
    </Container>
    )
  }
  }}

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
export default Homescreen;