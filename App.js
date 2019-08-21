
import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from "react-navigation";
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './screens/Home';
import SettingsScreen from './screens/Setting';
import RewardsScreen from './screens/Reward';
import ChatScreen from './screens/Chat';
import GoalsScreen from './screens/Goals';



const MyHomeStack = createStackNavigator({
      Home: HomeScreen,
  },
  {
    defaultNavigationOptions:{
      title:"Home"
    }
  });

const MySettingStack = createStackNavigator({
     Settings: SettingsScreen,
},
{
  defaultNavigationOptions:{
    title:"Settings"
  }
});

const MyRewardStack = createStackNavigator({
  Rewards: RewardsScreen,
},
{
defaultNavigationOptions:{
 title:"Rewards"
}
});

const MyChatStack = createStackNavigator({
  Chat: ChatScreen,
},
{
defaultNavigationOptions:{
 title:"Chat"
}
});

const MyGoalsStack = createStackNavigator({
  Goals: GoalsScreen,
},
{
defaultNavigationOptions:{
 title:"Goals"
}
});

const MyTabs = createBottomTabNavigator({
  Home : MyHomeStack,
  Settings: MySettingStack,
  Rewards : MyRewardStack,
  Chat : MyChatStack,
  Goals : MyGoalsStack
},
{
  defaultNavigationOptions:({navigation})=>{
    
    return{
      tabBarIcon:({tintColor})=>{
        const{ routeName}=navigation.state;
        let myicon
        if(routeName=="Home"){
          myicon='md-home'
        }else if(routeName=="Settings"){
          myicon='md-settings'
        }else if(routeName=="Rewards"){
          myicon='md-trophy'
        }else if(routeName=="Chat"){
          myicon='md-chatboxes'
        }else if(routeName=="Goals"){
          myicon='ios-star'
        }
        return <Ionicons name={myicon} size={30} color={tintColor}/>
      },
      tabBarOptions:{
        activeTintColor:"tomato",
        inactiveTintColor:"grey"
      },
      headerStyle: {
        backgroundColor: 'Grey',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }
  }
});

const AppContainer = createAppContainer(MyTabs);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}