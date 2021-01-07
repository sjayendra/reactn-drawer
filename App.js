// Dynamically Set Drawer/Sidebar Options in React Navigation Drawer
// https://aboutreact.com/dynamically-change-sidebar-options/

import 'react-native-gesture-handler';

import * as React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';
import LandingPage from './pages/LandingPage';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={toggleDrawer}>
        {/*Donute Button Image */}
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
          }}
          style={{width: 25, height: 25, marginLeft: 5}}
        />
      </TouchableOpacity>
    </View>
  );
};

const firstScreenStack = ({navigation, route}) => {
  return (
    <Stack.Navigator initialRouteName="FirstPage">
      <Stack.Screen
        name="FirstPage"
        component={FirstPage}
        initialParams={route.params}
        options={{
          title: 'First Page', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure
              navigationProps={navigation}
            />
          ),
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

const secondScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="SecondPage"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="SecondPage"
        component={SecondPage}
        options={{
          title: 'Second Page', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const thirdScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="ThirdPage"
        component={ThirdPage}
        options={{
          title: 'Third Page', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const drawerStack = ({route}) => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: '#e91e63',
      }}
      drawerContent={(props) => {
        return (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            {route.params.userType === 'user' ? (
              <DrawerItem
                label={({color}) => (
                  <Text style={{color}}>
                    Change Access to Guest
                  </Text>
                )}
                onPress={() =>
                  props.navigation.navigate(
                    'drawerStack',
                    {userType: 'guest'}
                  )
                }
              />
            ) : null}
          </DrawerContentScrollView>
        );
      }}>
      <Drawer.Screen
        name="FirstPage"
        options={{drawerLabel: 'First page Option'}}
        component={firstScreenStack}
        initialParams={{userType: route.params.userType}}
      />
      {route.params.userType === 'user' ? (
        <>
          <Drawer.Screen
            name="SecondPage"
            options={{drawerLabel: 'Second page Option'}}
            component={secondScreenStack}
          />
          <Drawer.Screen
            name="ThirdPage"
            options={{drawerLabel: 'Third page Option'}}
            component={thirdScreenStack}
          />
        </>
      ) : null}
    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="drawerStack" component={drawerStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
