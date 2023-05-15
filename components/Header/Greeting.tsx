import { StatusBar } from "expo-status-bar";
import React, { FunctionComponent } from "react";
import { StyleProp, TextStyle } from "react-native";
import styled from "styled-components/native";
import { colors } from "../colors";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";

interface GreetingProps {
    mainText: string,
    subText: string,
    mainTextStyles?: StyleProp<TextStyle>,
    subTextStyles?: StyleProp<TextStyle>
}

const StyleView = styled.View({
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',

});

const Greeting: FunctionComponent<GreetingProps> = (props) => {
    return(
        <StyleView>
            <RegularText
                textStyles={[
                    {
                        color: colors.secondary,
                        fontSize: 22,
                    },
                    props.mainTextStyles,
                ]}
            >
                {props.mainText}
            </RegularText>
            <SmallText
                textStyles={[
                    {
                        color: colors.grayDark
                    },
                    props.subTextStyles
                ]}
            >
                {props.subText}
            </SmallText>
        </StyleView>
    );
}

export default Greeting;