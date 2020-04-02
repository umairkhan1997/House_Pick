import React from 'react';
import {
 SafeAreaView,
 StyleSheet,
 ScrollView,
 View,
 Text,
 StatusBar,
 Button,Image, Platform
} from 'react-native';

import {
 Header,
 LearnMoreLinks,
 Colors,
 DebugInstructions,
 ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


// SCREENS
import Categories from './screen/Categories'
import Post from './screen/Post'
import PostDetail from './screen/PostDetail'
const Stack = createStackNavigator();


function MainStack() {
  return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
       <Stack.Screen name="Categories" component={Categories} />
       <Stack.Screen name="Post" component={Post} />
       <Stack.Screen name="PostDetail" component={PostDetail} />
      </Stack.Navigator>
  );
};

function MainNavi() {
  return (
       <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="MainStack" component={MainStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default MainNavi;