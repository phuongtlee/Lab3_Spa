import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {logout, useMyContextController} from '../store';
import ChangePassword from './ChangePass';

export default function Setting({navigation}) {
  const [controller, dispatch] = useMyContextController();
  const {userLogin} = controller;
  useEffect(() => {
    if (userLogin == null) navigation.navigate('Signin');
  }, [navigation, userLogin]);
  const onSubmit = () => {
    logout(dispatch);
  };
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Button
        style={styles.logoutBtn}
        mode="contained"
        onPress={() => navigation.navigate('ChangePass')}>
        Đổi mât khẩu
      </Button>
      <Button style={styles.logoutBtn} mode="contained" onPress={onSubmit}>
        Đăng xuất
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  logoutBtn: {
    margin: 10,
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#ff1493',
  },
});
