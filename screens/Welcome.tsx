import { StatusBar } from "expo-status-bar";
import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../components/colors";
import { Container } from "../components/shared";

// Images
import background from '../assets/bgs/background_v1.png';
import BigText from "../components/Texts/BigText";
import SmallText from "../components/Texts/SmallText";
import RegularButton from "../components/Buttons/RegularButton";

// Customer components

const WelcomeContainer = styled(Container)({
  backgroundColor: colors.secondary,
  justifyContent: 'space-between',
  width: '100%',
  height: '100%',
});

const TopSection = styled.View({
  width: '100%',
  flex: 1,
  maxHeight: '55%',
});

const TopImage = styled.Image({
  width: '100%',
  height: '100%',
  resizeMode: 'stretch',
})

const BottomSection = styled.View({
  width: '100%',
  padding: '25px',
  flex: 1,
  justifyContent: 'flex-end',
});

const Welcome: FunctionComponent = () => {
  return(
    <>
      <WelcomeContainer>
        <TopSection>
          <TopImage source={background} />
        </TopSection>
        <BottomSection>
          <BigText textStyles={{width: '70%', marginBottom: '25px'}}>
            Best way to track your money
          </BigText>
          <SmallText textStyles={{width: '70%', marginBottom: '25px'}}>
            Best payment method, connects your money to your friend
          </SmallText>
          <RegularButton onPress={() => {}}>
            Get Started
          </RegularButton>
        </BottomSection>
        </WelcomeContainer>
      <StatusBar style='light' />
    </>
  );
}

export default Welcome;