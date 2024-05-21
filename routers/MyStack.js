import {createStackNavigator} from '@react-navigation/stack';
import Signup from '../screen/Signup';
import Signin from '../screen/Signin';
import ForgotPass from '../screen/ForgotPass';
import Admin from '../screen/Admin';
import Customer from '../screen/Customer';
import Login from '../GiuaKi/Login';
import Register from '../GiuaKi/Register';
import Home from '../GiuaKi/Home';
import UpdateService from '../screen/UpdateService';
import {Button} from 'react-native';
import {logout, useMyContextController} from '../store';
import {useEffect} from 'react';
import CustomerAdmin from '../screen/CustomerAdmin';
import Profile from '../screen/Profile';
import Appoinent from '../screen/Appoinent';
import ChangePassword from '../screen/ChangePass';
import ProfileAllUser from '../screen/ProfileAllUser';
import AppointmentDetail from '../screen/AppointmentDetail';
import EditProfile from '../screen/EditProfile';

const Stack = createStackNavigator();
const MyStack = ({navigation}) => {
  const [controller, dispatch] = useMyContextController();
  const {userLogin} = controller;

  return (
    <Stack.Navigator
      initialRouteName="Signin"
      screenOptions={{headerMode: 'none'}}>
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          headerTitle: 'Signup',
          headerMode: 'screen',
          headerStyle: {backgroundColor: '#ff1493'},
          headerTintColor: '#fff',
          headerTitleStyle: {color: '#fff'},
        }}
      />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Admin" component={Admin} />
      <Stack.Screen name="CustomerAdmin" component={CustomerAdmin} />
      <Stack.Screen
        name="ChangePass"
        component={ChangePassword}
        options={{
          headerTitle: 'Change Password',
          headerMode: 'screen',
          headerStyle: {backgroundColor: '#ff1493'},
          headerTintColor: '#fff',
          headerTitleStyle: {color: '#fff'},
        }}
      />
      <Stack.Screen
        name="AppointmentDetail"
        component={AppointmentDetail}
        options={{
          headerTitle: 'Appointment Detail',
          headerMode: 'screen',
          headerStyle: {backgroundColor: '#ff1493'},
          headerTintColor: '#fff',
          headerTitleStyle: {color: '#fff'},
        }}
      />
      <Stack.Screen name="Customer" component={Customer} />
      <Stack.Screen name="ForgotPass" component={ForgotPass} />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitle: 'Profile',
          headerMode: 'screen',
          headerStyle: {backgroundColor: '#ff1493'},
          headerTintColor: '#fff',
          headerTitleStyle: {color: '#fff'},
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          headerTitle: 'Edit Profile',
          headerMode: 'screen',
          headerStyle: {backgroundColor: '#ff1493'},
          headerTintColor: '#fff',
          headerTitleStyle: {color: '#fff'},
        }}
      />
      <Stack.Screen
        name="ProfileAllUser"
        component={ProfileAllUser}
        options={{
          headerTitle: 'Profile',
          headerMode: 'screen',
          headerStyle: {backgroundColor: '#ff1493'},
          headerTintColor: '#fff',
          headerTitleStyle: {color: '#fff'},
        }}
      />
      <Stack.Screen
        name="UpdateService"
        component={UpdateService}
        options={{
          headerTitle: 'Update Service',
          headerMode: 'screen',
          headerStyle: {backgroundColor: '#ff1493'},
          headerTintColor: '#fff',
          headerTitleStyle: {color: '#fff'},
        }}
      />
      {/* <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitleStyle: {fontStyle: 'italic'},
          title: 'Hello ' + (userLogin != null && userLogin.fullname),
          headerTitleAlign: 'center',
          headerLeft: null,
        }}
      /> */}
    </Stack.Navigator>
  );
};
export default MyStack;
