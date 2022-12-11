import ItemContainer from '../components/itemsContainer'
import ItemButton from '../components/itemButton'
import MainView from '../components/mainView'
import {View, Text} from 'react-native'
const Addscreen = ({navigation,route}) => {
  if(route.params==undefined){
  return(
    <ItemContainer>
    <ItemButton navigation={navigation}/>
    <ItemButton/>
    </ItemContainer>
  )
}
else{
  const { userId, userName } = route.params;
  return(
        <View>
      {/* Use the parameters in the component */}
      <Text>User ID: {userId}</Text>
      <Text>User Name: {userName}</Text>
    </View>
  )
}}
export default Addscreen;