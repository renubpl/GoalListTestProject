import React from "react";
import {
    StyleSheet,
    View,
    ActivityIndicator,
    FlatList,
    Text,
    TouchableOpacity
} from "react-native";

import { createBottomTabNavigator, createAppContainer, createStackNavigator } from "react-navigation";

import { Ionicons } from '@expo/vector-icons';
import GoalView from "./GoalView";

class Goals extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            dataSource: []
        };
    }
    componentDidMount() {
        fetch("https://my-json-server.typicode.com/renubpl/mockapi/goals")
            .then(response => response.json())
            .then((responseJson) => {
                this.setState({
                    loading: false,
                    dataSource: responseJson
                })
            })
            .catch(error => console.log(error)) //to catch the errors if any
    }
    FlatListItemSeparator = () => {
        return (
            <View style={{
                height: .5,
                width: "100%",
                backgroundColor: "rgba(0,0,0,0.5)",
            }}
            />
        );
    }
    renderItem = (data) =>
        <TouchableOpacity style={styles.list} onPress={()=>this.props.navigation.navigate('GView')}>
            <Text style={styles.titletext}>{data.item.title})}
</Text>
            <Text style={styles.valueText}>{"Saving"}   {data.item.starttarget}{"/"}{data.item.endtarget} {"                  "}
                <Ionicons name="ios-arrow-forward" size={24} color="black" /></Text>
        </TouchableOpacity>
    render() {
        if (this.state.loading) {
            return (
                <View style={styles.loader}>
                    <ActivityIndicator size="large" color="#0c9" />
                </View>
            )
        }
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.dataSource}
                    ItemSeparatorComponent={this.FlatListItemSeparator}
                    renderItem={item => this.renderItem(item)}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        )




    }
}


const GoalNavigator = createStackNavigator({
    Goal: Goals,
    GView: GoalView
  },
  { headerMode: 'none' 
});

const GoalContainer = createAppContainer(GoalNavigator);

export default class App extends React.Component {
  render() {
    return <GoalContainer />;
  }
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    loader: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "flex-end",
        backgroundColor: "#fff"
    },
    list: {
        paddingVertical: 10,
        margin: 5,
        backgroundColor: "#fff"
    },
    titletext: {
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
        fontWeight: "bold",
        fontSize: 16,
        color: 'black'
    },
    valueText: {
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
        fontWeight: "bold",
        fontSize: 14,
        color: 'black'
    }
});