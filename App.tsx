import { StyleSheet, Text, View, Dimensions } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const {height, width} = Dimensions.get('window');

export default function App() {
  return (
    <View style={styles.container}>
    
      <View style={styles.header}/>

      <View style={styles.main}>
        <View style={styles.section1}/>
        <View style={styles.section2}/>
      </View>

      <View style={styles.footer}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: hp(100),
  },
  header:{
    height: hp(15),
    backgroundColor: 'tomato',
  },
  main: {
    height: hp(70),
    display: 'flex',
    flexDirection: 'row',
  },
  section1:{
    width: wp(50),
    backgroundColor: 'orange',
  },
  section2: {
    width: wp(50),
    backgroundColor: 'skyblue',
  },
  footer:{
    height: hp(15),
    backgroundColor: 'green',
  }
  

  
});
