import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,} from 'react-native';
import ImageViewer from './components/ImageViewer';
import Button from './components/Button';
import * as ImagePicker from 'expo-image-picker';

const PlaceholderImage = require('./assets/images/background-image.png');

export default function App() {

  const [selectedImage, setSelctedImage] = useState(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({allowsEditing: true,quality: 1,});

    if (!result.canceled) {
      setSelctedImage(result.assets[0].uri);
    } else {
      alert('Image did not load successfully');
    }
  };

  return (
    <View style={styles.container}>
    <View style={styles.imageContainer}>
      <ImageViewer placeholderImageSource={PlaceholderImage} selectedImage={selectedImage} />
    </View>
    <View style={styles.footerContainer}>
      <Button label="Choose a photo" theme= "primary" onPress={pickImageAsync}/>
      <Button label="Use this photo"/>
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
    paddingTop: 58,
  },
  footerContainer: {
    flex:1/3,
    alignItems: 'center',
  }

});
