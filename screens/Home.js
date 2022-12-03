import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity, ImageBackground } from 'react-native';
import Group from './fragment_home/Group';
import ListProfile from './fragment_home/ListProfile';
import Profile from './fragment_home/Profile';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ListProfile" component={ListProfile} options={{
          tabBarLabel: 'ListProfile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-multiple" color={color} size={26} />
          ),
        }}/>
      <Tab.Screen name="Profile" component={Profile} options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}/>
      <Tab.Screen name="Group" component={Group} options={{
          tabBarLabel: 'Group',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-group" color={color} size={26} />
          ),
        }}/>
    </Tab.Navigator>
/*
    <View style={styles.containerhome}>
      <StatusBar style="auto" />
    </View>*/
  );
}

const styles = StyleSheet.create({
  containerhome: {
    flex: 1,
    backgroundColor: '#7dd1f0',
    alignItems: 'center',
    justifyContent: 'center',
  }
});