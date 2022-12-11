import ItemContainer from '../components/itemsContainer'
import ItemButton from '../components/itemButton'
import MainView from '../components/mainView'
import {View, Text} from 'react-native'
const Minusscreen = ({navigation,route}) => {
  return(
    <ItemContainer>
    <ItemButton navigation={navigation}/>
    <ItemButton/>
    </ItemContainer>
  )
}

export default Minusscreen;