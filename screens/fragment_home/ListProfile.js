import { View, Text, StyleSheet, ImageBackground, FlatList, Image } from 'react-native'
import React, {useState, useEffect} from 'react'
import { StatusBar } from 'expo-status-bar';
import initFirebase from '../../config';

export default function ListProfile(props) {
  const [data, setData] = useState([]);
  const reference = initFirebase.database().ref("profiles");
  
  useEffect(() => {
    reference.on("value", (dataSnapshot) => {
      let d = [];
      dataSnapshot.forEach(profile => {
        d.push(profile.val());
      });
      setData(d);
    });
  
    return () => {
      reference.off();
    }
  }, [])
  

  return (
    <ImageBackground
      source={require("../../assets/img.jpg")}
      style={styles.container}
    >
      <StatusBar style={"light"}/>
      <Text
        style={{
          color:"white",
          marginTop:45,
          fontSize: 36
      }}>
      ListProfile</Text>
      <FlatList
      ItemSeparatorComponent={() => <View style={{height: 20}} />}
      style={styles.flat_list}
      data={data}
      renderItem={({item}) => {
        return (
          <View style={styles.profile_view}>
            <Image
              source={require("../../assets/avatar.png")}
              style={styles.profile_image}>
            </Image>
            <View>
              <Text
              onPress={() => {
                props.navigation.navigate("chat");
              }}
                style={styles.profile_pseudo}>
                  {item.pseudo}
              </Text>
              <View style={styles.profile_infos}>
                <Text>{item.nom} </Text>
                <Text>{item.prenom}</Text>
              </View>
            </View>
          </View>
        );
      }}
      >
      </FlatList>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
      alignItems: "center",
      justifyContent: "flex-start",
      flex: 1,
    },
  profile_view : {
    width: "98%", 
    flexDirection: "row", 
    backgroundColor:"white", 
    borderRadius: 10, 
    padding:20,
  },
  profile_pseudo : {
    fontSize: 24, 
    fontWeight:"bold"
  },
  profile_infos : {
    flexDirection: "row"
  },
  profile_image :{
    height:60, 
    width:60,
  },
  flat_list: {
    width: "98%",
  }
});