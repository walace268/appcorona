import React from  "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Appstack = createStackNavigator();
import Home from './pages/index.js';

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOpitions={{headerShown: false}}>
                <Appstack.screen name="Home" component={Home}></Appstack.screen>
            </AppStack.Navigator>       
        </NavigationContainer> 
    );
}

export default Home;