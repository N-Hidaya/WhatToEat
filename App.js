import React from 'react';
import { StatusBar, StyleSheet, Platform, Text, View, ScrollView} from 'react-native';
import  {NavigationContainer}  from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import  {About}  from './app/screens/homepage';
import  {FoodScreen} from './app/screens/foodscreens';

//const Drawer = createDrawerNavigator();

export default function App() {

  return (
    <View style={styles.container}>
      {/*<NavigationContainer>
        <Drawer.Navigator initialRouteName="Home"
          screenOptions={{
            activeTintColor: '#FF8A00',
            backgroundColor: '#1C2227',
            inactiveTintColor: '#798288',
          }}>
            <Drawer.Screen name="Home" component={FoodScreen} />
            <Drawer.Screen name="About" component={About} />
        </Drawer.Navigator>
        </NavigationContainer>*/}
      <About />
      <FoodScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
