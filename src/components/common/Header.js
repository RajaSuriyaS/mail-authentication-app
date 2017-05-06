import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { textstyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
    <Text style={textstyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    elevation: 2,
    position: 'relative'
  },
  textstyle: {
  fontSize: 20
      }
};

export { Header };
