import React, { FunctionComponent, ReactNode } from "react";
import { GestureResponderEvent, StyleProp, TextStyle, ViewStyle } from "react-native";
import styled from "styled-components/native";

// components
import { colors } from "../colors";
import RegularText from "../Texts/RegularText";

const ButtonView = styled.TouchableOpacity({
  alignItems: 'center',
  backgroundColor: colors.primary,
  width: '100%',
  padding: '20px',
  borderRadius: '20px',
});

// types
interface ButtonProps {
  btnStyles?: StyleProp<ViewStyle>;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  textStyles?: StyleProp<TextStyle>;
  children: ReactNode;
}

const RegularButton: FunctionComponent<ButtonProps> = (props) => {

  return (
    <ButtonView onPress={props.onPress} style={props.btnStyles}>
      <RegularText textStyles={props.textStyles}>
        {props.children}
      </RegularText>
    </ButtonView>
  );
}

export default RegularButton;
