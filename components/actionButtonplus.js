import {TouchableOpacity, View, Text, Image} from 'react-native'
import image1 from '../assets/snack-icon.png'
import {useNavigation} from '@react-navigation/native';
const ActionButtonPlus = () => {
  const navigation = useNavigation();
  return(
      <View style={{flex: 1}}>
      <TouchableOpacity style={{position: 'absolute',
          bottom: 0,
          left: 0,
          padding: 20,
          marginBottom: 70}}
          onPress={() => {navigation.navigate('Add')} }>
      <Image
        source={image1}
        style={{ width: 50, height: 50 }}
      />
    </TouchableOpacity>
      </View>
  )
}

export default ActionButtonPlus;