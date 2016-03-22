/*eslint-disable react/display-name*/
/*react-eslint misfires for jsx-returning functions*/

/**
 * Navigation Bar for IOS
 * Used with Navigator
 * https://github.com/facebook/react-native/blob/master/Examples/UIExplorer/Navigator/NavigationBarSample.js
 */

'use strict';

import React, {
  StyleSheet,
  Text,
  View,
  ActionSheetIOS,
  Platform,
  Image,
  TouchableHighlight
} from 'react-native';

const Icon = require('react-native-vector-icons/Ionicons');

let showShareActionSheet = function(url) {
  if (Platform.OS === 'ios') {
    ActionSheetIOS.showShareActionSheetWithOptions({
      url: url
    },
  (error) => { /* */ },
  (success, method) => {
    /* */
  });
  }
}

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
          showShareActionSheet(route.post.link)
        }}
        >
        <Icon name='ios-upload-outline' style={styles.navBarIcon} />
        </TouchableHighlight>
        );
    }
    return null;
  },

  Title: function(route, navigator, index, navState) {

    return (
      <View style={styles.navBarLogoWrap}>
        <Image
          source={require('../../../assets/headericon.png')}
          style={styles.navBarLogo} />
      </View>
    );
  }
};

var styles = StyleSheet.create({

  navBarLogoWrap:{
    flex:1,
    alignItems:'center'
  },
  navBarButton:{
    color:'#ffffff',
    padding:10,
    fontSize:16,
    textAlign:'center',
  },
  navBarIcon:{
    color:'#ffffff',
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
    color:'#ffff00',
    textAlign:'center',
    fontWeight:'bold',
  }
});

module.exports = NavigationBarRouteMapper;
