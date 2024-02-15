import {
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Title from './src/components/Title';
import Title2 from './src/components/Title2';
import Input from './src/components/Input';

const App = () => {
  return (
    <View style={styles.container}>
      <Title text="WELCOME"/>
      <Title2 text2="   Username "/>
        <Input placeholder="masukkan username anda" />
      <Title2 text2="   Email "/>
        <Input placeholder="masukkan email anda" />
      <Title2 text2="   Password "/>
        <Input placeholder="masukkan password anda"  />
        <TouchableOpacity
          style={styles.touchableOpacity}>
          <Text style={styles.touchableText}>Sign In</Text>
        </TouchableOpacity>
        <View style={styles.Container}>
        <Image
         source={require('./assets/RN.png')}
         style={styles.image}
         resizeMode="contain"
        />
        
        </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#555555',

  },
  colorBoxesContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-around',
  },
  colorBox: {
    width: 100,
    height: 100,
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginVertical: 320,
    
  },
  touchableOpacity: {
    backgroundColor:' rgb(135, 206, 235)',
    padding: 10,
    height: 45,
    width: 430,
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 20,
  },
  touchableText: {
    color: 'white',
    fontSize: 15,
    padding: 5,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;



