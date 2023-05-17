import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../colors";
import { BalanceCardProps } from "./types";

// images
import card_bg from "../../assets/bgs/background_transparent.png";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import { View } from "react-native";

const CardBackground = styled.ImageBackground({
    height: '75%',
    width: '100%',
    resizeMode: 'cover',
    backgroundColor: colors.accent,
    borderRadius: '25px',
    overflow: 'hidden',
});

const TouchableView = styled.View({
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '30px',
    flex: 1,

});

const CardRow = styled.View({
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
});

const Logo = styled.Image({
    width: '100%',
    height: '80%',
    resizeMode: 'contain',
    flex: 1,
});

const BalanceCard: FunctionComponent<BalanceCardProps> = (props) => {
    return (
        <CardBackground source={card_bg}>
            <TouchableView>
                <CardRow>
                    <RegularText
                        textStyles={{color: 'black'}}
                    >
                        ******{props?.accountNo?.slice(6, 10)}
                    </RegularText>
                </CardRow>
                <CardRow>
                    <View style={{flex: 3}}>
                        <SmallText
                            textStyles={{
                                color: colors.white
                            }}
                        >
                            Total balance
                        </SmallText>
                        <RegularText>
                            ${props.balance}
                        </RegularText>
                    </View>
                    <Logo source={props.logo} />
                </CardRow>
            </TouchableView>
        </CardBackground>
    );
}

export default BalanceCard;