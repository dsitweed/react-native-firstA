import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../colors";
import Profile from "../Header/Profile";
import { ScreenWidth } from "../shared";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import { SendMoneyProps } from "./types";

const SendMoneyItemContainer = styled.TouchableHighlight({
    height: '130px',
    width: `${ScreenWidth * 0.27}px`,
    padding: '10px',
    borderRadius: '15px',
    justifyContent: 'space-around',
    margin: '0 10px 10px 0px',
});

const SendMoneyItem: FunctionComponent<SendMoneyProps> = (props) => {
    return(
        <SendMoneyItemContainer
            underlayColor={colors.secondary}
            style={{
                backgroundColor: props.background
            }}
            onPress={() => alert("Send money")}
        >
            <>
                <Profile
                    image={props.image}
                    imageContainerStyle= {{
                        marginBottom: 10,
                    }}
                />
                <SmallText
                    textStyles={{
                        textAlign: 'center',
                        color: colors.white,
                        fontSize: 12,
                    }}
                >
                    {props.name}
                </SmallText>
                <RegularText
                    textStyles={{
                        textAlign: 'center',
                        color: colors.white,
                        fontSize: 13,
                    }}
                >
                    {props.amount}
                </RegularText>
            </>
        </SendMoneyItemContainer>
    );
}

export default SendMoneyItem;