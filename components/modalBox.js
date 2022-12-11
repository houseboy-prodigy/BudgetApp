import {TouchableOpacity, Image, Text, View, Modal, StyleSheet, TextInput, Button} from 'react-native'

const ModalBox = (props) => {
  const { navigation } = props;
  return (
 <Modal
      animationType="slide"
      transparent={false}
      visible={props.visible}
    >
      <View style={styles.container}>
          <TextInput style={{color: 'black', fontSize:30}}
      placeholder="Enter a value"
      placeholderTextColor='black'
    />
        <Button title='submit'
        onPress={() => {navigation.navigate('Home')} }/>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    marginTop: 200,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ModalBox;