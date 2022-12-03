import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity, ImageBackground } from 'react-native';
import initFirebase from '../config';

export default function Auth(props) {
	const [email, setEmail] = useState("ok")
	const [password, setPassword] = useState("ok")
  const auth = initFirebase.auth()
  return (
    <ImageBackground style={styles.container} source={require("../assets/img1.jpg")}>
      <StatusBar style="auto" />
      <View style={styles.container2}> 
        <Text style={{
          color: "white",
          fontSize: 36,
          fontWeight: "bold",
        }}>
          {" "}Authentication</Text>
          <TextInput 
						onChangeText={(text) => {
							setEmail(text)
						}}
					style={styles.textinput} placeholder="Enter your E-mail ..." keyboardType='email-address'></TextInput>
          <TextInput 
						onChangeText={(text) => {
							setPassword(text)
						}}
					style={styles.textinput} secureTextEntry={true} placeholder = "Enter your password ..." keyboardType='default'></TextInput>
          <Button
            onPress={() => auth.signInWithEmailAndPassword(email,password)
              .then(() => {props.navigation.navigate("home")})
              .catch((err) => {alert(err)})}
            title="Login"
            color="#fcca03"
          />
          <TouchableOpacity>
            <Text style={styles.texttouchable} onPress={() => {props.navigation.navigate("signup")}}>Create new user</Text>
          </TouchableOpacity>
      </View>
    </ImageBackground>
  );
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
  texttouchable: {
    padding: 20,
    color: "white",
  },
  container: {
    flex: 1,
    backgroundColor: '#7dd1f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    height: 300,
    width: "90%",
    borderRadius: 10,
    backgroundColor: '#0003',
    alignItems: 'center',
    justifyContent: 'center',
  }
});