import {View, Text, StyleSheet} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
const ItemsContainer = (props) => {
  return (
 <LinearGradient
      colors={['#EC9F05', '#3b5998']}
      style={styles.gradientContainer}
    >
      <View style={{flex: 1, flexDirection: 'row'}}>
      {props.children}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientContainer:{
    position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
  }
})
export default ItemsContainer;