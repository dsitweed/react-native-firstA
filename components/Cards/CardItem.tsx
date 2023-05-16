import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../colors";
import { ScreenWidth } from "../shared";
import { CardProps } from "./types";

// Image
import card_background from '../../assets/bgs/background_transparent.png';
import RegularText from "../Texts/RegularText";
import { View } from "react-native";
import SmallText from "../Texts/SmallText";


const CardBackground = styled.ImageBackground({
    height: `${ScreenWidth * 0.5}px`,
    width: `${ScreenWidth * 0.67}px`,
    resizeMode: 'cover',
    backgroundColor: colors.accent,
    borderRadius: '25px',
    marginRight: '25px',
    overflow: 'hidden',
});

const CardTouchable = styled.TouchableHighlight({
    height: '100%',
    borderRadius: '25px',
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
    width: '200%',
    height: '200%',
    resizeMode: 'contain',
    flex: 1,
});

const CartItem: FunctionComponent<CardProps> = (props) => {
    console.log(props.logo);

    const handlePress = () => {

    }

    return (
        <CardBackground source={card_background}>
            <CardTouchable
                underlayColor={colors.secondary} onPress={handlePress}
            >
                <TouchableView>
                    <CardRow>
                        <RegularText textStyles={{color: 'black'}}>
                            *****{props.accountNo.slice(6, 10)}
                        </RegularText>
                    </CardRow>
                    <CardRow>
                        <View style={{flex: 3}}>
                            <SmallText
                                textStyles={{
                                    marginBottom: 5,
                                    color: colors.grayLight,
                                }}
                            >
                                Total balance
                            </SmallText>
                            <RegularText>
                                ${props.balance}
                            </RegularText>
                        </View>
                        <Logo source={props.logo}/>
                    </CardRow>
                </TouchableView>
            </CardTouchable>
        </CardBackground>
    );
}

export default CartItem;