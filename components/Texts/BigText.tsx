import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../colors";

const StyledText = styled.Text({
  fontSize: '37px',
  color: colors.white,
  textAlign: 'left',
  fontFamily: 'Lato-Bold',
});

// Types
import { TextProps } from "./types";


const BigText: FunctionComponent<TextProps> = (props) => {
  return(
    <StyledText style={props.textStyles}>
      {props.children}
    </StyledText>
  );
}

export default BigText;