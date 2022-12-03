import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity, ImageBackground } from 'react-native';
import initFirebase from '../config';

export default function SignUp(props) {
	const [email, setEmail] = useState("ok")
	const [password, setPassword] = useState("ok")
    const auth = initFirebase.auth()
  return (
    <ImageBackground style={styles.containersign} source={require("../assets/img1.jpg")}>
      <StatusBar style="auto" />
      <View style={styles.container2sign}> 
        <Text style={{
          color: "white",
          fontSize: 36,
          fontWeight: "bold",
        }}>
          {" "}Create account</Text>
          <TextInput 
						onChangeText={(text) => {
							setEmail(text)
						}}
					style={styles.textinputsign} placeholder="Enter your E-mail ..." keyboardType='email-address'></TextInput>
          <TextInput 
						onChangeText={(text) => {
							setPassword(text)
						}}
					style={styles.textinputsign} secureTextEntry={true} placeholder = "Enter your password ..." keyboardType='default'></TextInput>
          <Button
            onPress={() => auth.createUserWithEmailAndPassword(email,password)
                .then(() => {props.navigation.navigate("auth")})
                .catch((err) => {alert(err)})}
            title="Sign Up"
            color="#fcca03"
          />
          <TouchableOpacity>
          <Text style={styles.texttouchable} onPress={() => {props.navigation.navigate("auth")}}>Login</Text>
          </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  textinputsign: {
    padding: 10,
    margin: 20,
    borderRadius: 8,
    backgroundColor: "white",
    height: 40,
    width: "75%"
  },
  containersign: {
    flex: 1,
    backgroundColor: '#7dd1f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texttouchable: {
    padding: 20,
    color: "white",
  },
  container2sign: {
    height: 300,
    width: "90%",
    borderRadius: 10,
    backgroundColor: '#0003',
    alignItems: 'center',
    justifyContent: 'center',
  }
});