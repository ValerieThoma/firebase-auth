import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({label, value, onChangeText, placeholder, secureTextEntry}) => {
  const { inputStyle, lableStyle, containerStyle } = styles;
  return(
    <View style={containerStyle}>
      <Text style={lableStyle}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        autoCorrect={false}
        secureTextEntry={secureTextEntry}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  )
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
    height: 20,
    width: 100
  },
  lableStyle: {
    fontSize: 18, 
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};


export { Input };