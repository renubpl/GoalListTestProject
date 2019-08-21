import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";

export default class SettingsScreen extends React.Component {
   
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         
          <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Settings Screen</Text>
        </View>
      );
    }
  }
  