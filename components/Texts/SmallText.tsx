import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../colors";

const StyledText = styled.Text({
  fontSize: '13px',
  color: colors.gray,
  textAlign: 'left',
  fontFamily: 'Lato-Regular',
});

// Types
import { TextProps } from "./types";


const SmallText: FunctionComponent<TextProps> = (props) => {
  return(
    <StyledText style={props.textStyles}>
      {props.children}
    </StyledText>
  );
}

export default SmallText;