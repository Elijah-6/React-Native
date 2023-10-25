import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

const PlaceholderImage = require('./assets/images/background-image.png');

export default function App() {
  return (
    <View style={styles.container}>
    <View style={styles.imageContainer}>
      <Image source={PlaceholderImage} style={styles.image}/>
    </View>
      {/* <Text style = {{color : '#fff'}}>Open up App.js to start working on your app!</Text> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 20,
  },
  image: {
    width: 320,
    height: 450,
    borderRadius: 18,
  },

});
