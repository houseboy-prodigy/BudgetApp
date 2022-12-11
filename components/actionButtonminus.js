import {TouchableOpacity, View, Text, Image} from 'react-native'
import image1 from '../assets/snack-icon.png'
import {useNavigation} from '@react-navigation/native';
const ActionButtonMinus = () => {
  const navigation = useNavigation();
  return(
      <View style={{flex: 1}}>
      <TouchableOpacity style={{position: 'absolute',
          bottom: 0,
          right: 0,
          padding: 20,
          marginBottom: 70}}
          onPress={() => {navigation.navigate('Minus')} }>
      <Image
        source={image1}
        style={{ width: 50, height: 50 }}
      />
    </TouchableOpacity>
      </View>
  )
}

export default ActionButtonMinus;