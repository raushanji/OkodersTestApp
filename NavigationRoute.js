import React, {Component} from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import TableDetail from './screens/TableDetail';

const Stack = createStackNavigator();

export default class NavigationRoute extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="home">
                    <Stack.Screen name="home" component={Home} options={{headerShown: false}} />
                    <Stack.Screen name="tableDetail" component={TableDetail} options={{headerTitle: 'Table Detail'}} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}