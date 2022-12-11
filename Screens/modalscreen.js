import {TouchableOpacity, Image, Text, View, Modal, StyleSheet, TextInput, Button} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Container from '../components/Container'
import {useState} from 'react'
const ModalScreen = (props) => {
  const navigation = useNavigation();
  const [input,setInput] = useState()
  const [val, setVal] = useState()
  const onPressHandle = () => {
    setVal(input);
    const params = {
      userId: input,
      userName: input
    };
    // Use the `navigate` function to navigate to the `Home` screen and pass the `params` object
    navigation.navigate('Home', params);
  };

  return (

    <Modal
      animationType="slide"
      transparent={false}
      visible={true}
      onRequestClose={props.onRequestClose}
    >
     <Container>
      <View style={styles.container}>
          <TextInput style={{color: 'white', fontSize:50}}
      placeholder="Enter a value"
      placeholderTextColor= 'black'
      onChangeText={(text) => {
        // Update the time state with the user-entered value
        setInput((text));
      }}
    />
         <Button         
        title='submit'
        onPress={onPressHandle}
        />
      </View>
      </Container>
    </Modal>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ModalScreen;