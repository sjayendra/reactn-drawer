// Dynamically Set Drawer/Sidebar Options in React Navigation Drawer
// https://aboutreact.com/dynamically-change-sidebar-options/

import * as React from 'react';
import {Button, View, Text, SafeAreaView} from 'react-native';

const LandingPage = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 18,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Dynamically Set Drawer/Sidebar Options
            {'\n'}
            in React Navigation Drawer
            {'\n\n'}
            Landing Page
          </Text>
          <Button
            onPress={() =>
              navigation.navigate('drawerStack', {userType: 'user'})
            }
            title="Go to Home as Registerd User"
          />
          <Text
            style={{
              textAlign: 'center',
              marginVertical: 16,
            }}>
            ------------- OR -------------
          </Text>
          <Button
            onPress={() =>
              navigation.navigate('drawerStack', {userType: 'guest'})
            }
            title="Go to Home as Guest"
          />
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey'
          }}>
          Dynamically Set Drawer/Sidebar Options
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey'
          }}>
          www.aboutreact.com
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default LandingPage;
