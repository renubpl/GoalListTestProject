import React from "react";
import {
    StyleSheet,
    View,
    Button,
    ActivityIndicator,
    FlatList,
    Text,
    ProgressBarAndroid,
    Image,
    TouchableOpacity
} from "react-native";

import { Ionicons } from '@expo/vector-icons';
import { black } from "ansi-colors";


export default class GoalView extends React.Component {
    static navigationOptions= ({ navigation }) =>{
        return {
            header: () => null,
        title:navigation.getParam('gtitle'),
        headerRight: (
            <Button
              title="Edit"
              color="#000"
            />
          ),
          headerLeft: (
            <Ionicons
              name="ios-arrow-back"
              color="#000"
              size={32}
              onPress={() => navigation.goBack(null)}
            />
          ),
          headerStyle: {
            marginHorizontal: 10,
           
            backgroundColor: "#fff"
            
          },
          headerTitleStyle: { color: "#000", alignSelf: "center" }
        };
        
    };


     
    render() {
        console.log("fromGoalsView", this.props)
        return (
            <View>
              <Image
          style={{ width: 200, height: 200 , justifyContent: 'center',alignSelf: 'center', alignItems: 'center',
          alignContent:'center'}}
          source={{ uri: 'http://www.pngall.com/wp-content/uploads/1/Save-Money-PNG-Image-HD.png' }}
        />

<View style={styles.container}>
        
       <Text>{this.props.navigation.getParam('start')}{"    "}{this.props.navigation.getParam('end')}</Text>
      </View>

              </View>
              
        );
    }
}

const styles = StyleSheet.create({
    textTitle: {
        alignSelf: "center",
        justifyContent: "center",
        alignContent: "center",
        fontWeight: 'bold',
        fontSize: 24
    },
    buttonStyle: {
        alignSelf: 'flex-start',
        justifyContent: "center",
        alignContent: "flex-start",
        fontWeight: 'bold',
    },
    img: {
        flex: 1,
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        alignContent:'center',
        backgroundColor:'black'

    },
       container: {
              flex: 1,
              justifyContent: 'space-evenly',
              padding: 10,
           

    }
});