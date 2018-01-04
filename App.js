/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import {List} from 'antd-mobile'

const Item = List.Item


export default class App extends Component<{}> {
  render() {

    const cmps = [
      <Item key="cwd" arrow="horizontal" onClick={() => console.log('2')}>忘记密码 </Item>,
      <Item key="heihei" arrow="horizontal" onClick={() => console.log('3')}>修改密码 </Item>
    ]

    return (
      <View style={styles.container}>

        <List>
          <Item arrow="horizontal" onClick={() => console.log('1')}>提现账户 </Item>
        </List>

        <View style={{height: 20}} />
        <List>
          <Item arrow="horizontal" onClick={() => console.log('1')}>提现账户 </Item>
          {cmps.map(comp => comp)}
        </List>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
