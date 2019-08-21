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


export default class GoalView extends React.Component {
    static navigationOptions = {
        title: 'GoalView',

    };


    render() {
        console.log("fromGoalsView", this.props)
        return (
            <View>
                <Ionicons name="md-arrow-back" style={styles.buttonStyle}
                    onPress={() => this.props.navigation.goBack()} size={42} color="black" />

                <Text>Goal View Details</Text>

               
               
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
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignSelf: 'center'

    }
});