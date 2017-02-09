/*eslint-disable react/display-name*/
/*react-eslint misfires for jsx-returning functions*/

/**
 * Navigation Bar for IOS
 * Used with Navigator
 * https://github.com/facebook/react-native/blob/master/Examples/UIExplorer/Navigator/NavigationBarSample.js
 */

'use strict';

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Platform,
  Image,
  TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Header from './Header';
import theme from '../../style/theme';


let NavigationBarRouteMapper = {
  LeftButton: function(route, navigator, index, navState) {
    return (<TouchableHighlight
      underlayColor={'transparent'}
      onPress={() => {
        if (index > 0) {
          navigator.pop();
        }
      }}>
      { index > 0 ?
        <Icon name='ios-arrow-back' style={styles.navBarIcon} /> :
        <View/>
      }
      </TouchableHighlight>
      )
  },

  RightButton: function(route, navigator, index, navState) {
    if (route.actions) {
      return (
        <TouchableHighlight
        onPress={() => {
          console.log('share');
        }}
        >
          <Icon name='ios-upload-outline' style={styles.navBarIcon} />
        </TouchableHighlight>
        );
    }
    return null;
  },

  Title: function(route, navigator, index, navState) {

    if (route.showName) {
      return (
        <Text style={styles.navBarTitle}>
        {route.name}
        </Text>
      );
    }
    return (
      <Header title={'Whappu'} backgroundColor={theme.secondary} />
    );
  }
};

var styles = StyleSheet.create({

  navBarLogoWrap:{
    flex:1,
    alignItems:'center'
  },
  navBarButton:{
    color:'#FFFFFF',
    padding:10,
    fontSize:16,
    textAlign:'center',
  },
  navBarIcon:{
    color:'#FFFFFF',
    padding:6,
    paddingLeft:10,
    paddingRight:10,
    fontSize:28,
    textAlign:'center',
  },
  navBarLogo:{
    top:-5,
    width:64,
    height:64,
  },
  navBarTitle:{
    padding:10,
    fontSize:16,
    color:'#FFFFFF',
    textAlign:'center',
    fontWeight:'bold',
  }
});

module.exports = NavigationBarRouteMapper;
