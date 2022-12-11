import Homescreen from './Screens/Homescreen'
import Addscreen from './Screens/Addscreen'
import Minusscreen from './Screens/Minusscreen'
import ModalScreen from './Screens/modalscreen'
import AnotherScreen from './Screens/anotherone'
import {View, Text} from 'react-native'
import {NavigationContainer} from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Homescreen} />
        <Stack.Screen name="Add" component={Addscreen} />
        <Stack.Screen name="Minus" component={Minusscreen} />
        <Stack.Screen name="Another" component={AnotherScreen} />
        <Stack.Screen name="Modals" component={ModalScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;