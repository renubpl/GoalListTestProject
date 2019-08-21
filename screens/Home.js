import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";


export default class HomeScreen extends React.Component {
    
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity onPress={this.props.navigation.openDrawer}>
            <Text>Open Drawer</Text>
          </TouchableOpacity>
          <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Home Screen</Text>
        </View>
      );
    }
  }