import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import BookDonateScreen from '../screens/NeedHelpForOthers'
import RecieverDetailsScreen from '../screens/ReceiverDetailsScreen'




export const AppStackNavigator = createStackNavigator({
  HelpOthers:{
        screen:BookDonateScreen,
        navigationOptions:{
            headerShown:true
        }
    },
  RecieverDetails : {
    screen : RecieverDetailsScreen,
    navigationOptions:{
      headerShown : false
    }
  }
},
  {
    initialRouteName: 'HelpOthers'
  }
);