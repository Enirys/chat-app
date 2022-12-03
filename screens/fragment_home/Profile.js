import { View, Text, Image, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native'
import { useState } from 'react';
import initFirebase from '../../config';
import ImagePicker from 'expo-image-picker';

export default function Profile() {
    const [nom, setNom] = useState("ok");
    const [prenom, setPrenom] = useState("ok");
    const [pseudo, setPseudo] = useState("ok");
    const [image, setImage] = useState(null);
    const user = initFirebase.auth().currentUser;
    const reference = initFirebase.database().ref('/profiles');
    const storage = initFirebase.storage();  

  const imageToBlob = async(uri) => {
    const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function() {
      resolve(xhr.response);
    };
    xhr.onerror = function(e) {
      console.log(e);
      reject(new TypeError("Network request failed"));
    };
  
    xhr.responseType = "blob";
    xhr.open("GET", uri, true);
    xhr.send(null);
  });
    return blob;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile</Text>
      <TouchableOpacity>
        <Image source={require("../../assets/avatar.png")}
        style={styles.profile} />
      </TouchableOpacity>
       <TextInput 
			onChangeText={(text) => {
			    setNom(text)
		}}
		style={styles.textinput} placeholder="Nom"></TextInput>
        <TextInput 
			onChangeText={(text) => {
			    setPrenom(text)
		}}
		style={styles.textinput} placeholder="Prénom"></TextInput>
        <TextInput 
			onChangeText={(text) => {
			    setPseudo(text)
		}}
		style={styles.textinput} placeholder="Pseudo"></TextInput>

        <Button
            onPress={() => {
                reference.child(user.uid).set({
                    nom: nom,
                    prenom: prenom,
                    pseudo: pseudo,
              })
              .then(() => console.log('Data set.'))
              .catch(() => { alert(err) })
            }}
            title="Save"
            color="#fcca03"
        />
    </View>
  )
}

const styles = StyleSheet.create({
    textinput: {
        padding: 10,
        margin: 20,
        borderRadius: 8,
        backgroundColor: "white",
        height: 40,
        width: "75%"
      },
    text: {
        fontSize: 30
    },
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    profile: {
      width: 150,
      height: 150,
      borderRadius: 400 /2
    },
  });