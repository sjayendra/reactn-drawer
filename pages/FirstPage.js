// Dynamically Set Drawer/Sidebar Options in React Navigation Drawer
// https://aboutreact.com/dynamically-change-sidebar-options/

import React, {useState} from 'react';
import {Button, View, Text, SafeAreaView} from 'react-native';

const FirstPage = ({navigation, route}) => {
  const [
    visible,
    setVisible
  ] = useState(route.params.userType === 'user');
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
            First Page
          </Text>
          <Button
            onPress={() => navigation.navigate('LandingPage')}
            title="Go to Initial Page"
          />
          {visible ? (
            <Button
              onPress={() => {
                navigation.navigate(
                  'drawerStack',
                  {userType: 'guest'}
                );
                setVisible(false);
              }}
              title="Change Access to Guest"
            />
          ) : null}
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

export default FirstPage;
