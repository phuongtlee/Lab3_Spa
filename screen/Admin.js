import React from 'react';
import {View, Button} from 'react-native';
import {Icon, IconButton, Text} from 'react-native-paper';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RouterServices from '../routers/RouterServices';
// import 'react-native-gesture-handler';
import Transaction from './Transaction';
import Customer from './Customer';
import Setting from './Setting';
import CustomerAdmin from './CustomerAdmin';

const Tab = createBottomTabNavigator();
export default function Admin() {
  return (
    <Tab.Navigator initialRouteName="RouterServices">
      <Tab.Screen
        name="RouterServices"
        component={RouterServices}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: () => <Icon source="home" color="#ff1493" size={26} />,
          tabBarLabelStyle: {color: '#ff1493', fontSize: 13},
        }}
      />
      <Tab.Screen
        name="Transaction"
        component={Transaction}
        options={{
          tabBarLabel: 'Transaction',
          headerStyle: {backgroundColor: '#ff1493'},
          headerTitleStyle: {color: 'white'},
          tabBarIcon: () => <Icon source="cash" color="#ff1493" size={26} />,
          tabBarLabelStyle: {color: '#ff1493', fontSize: 13},
        }}
      />
      <Tab.Screen
        name="Customer"
        component={CustomerAdmin}
        options={{
          tabBarLabel: 'Customer',
          headerStyle: {backgroundColor: '#ff1493'},
          headerTitleStyle: {color: 'white'},
          tabBarIcon: () => (
            <Icon source="account-multiple" color="#ff1493" size={26} />
          ),
          tabBarLabelStyle: {color: '#ff1493'},
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarLabel: 'Setting',
          headerStyle: {backgroundColor: '#ff1493'},
          headerTitleStyle: {color: 'white'},
          tabBarIcon: () => <Icon source="cog" color="#ff1493" size={26} />,
          tabBarLabelStyle: {color: '#ff1493'},
        }}
      />
    </Tab.Navigator>
  );
}
