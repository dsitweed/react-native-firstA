import { StatusBar } from "expo-status-bar";
import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../components/colors";
import { Container } from "../components/shared";
import AmountSection from "../components/Balance/AmountSection";
import BalanceCardSection from "../components/Balance/BalanceCardSection";
import ButtonSection from "../components/Balance/ButtonSection";

const BalanceContainer = styled(Container)({
    backgroundColor: colors.grayLight,
    width: '100%',
    padding: '15px',
    flex: 1,
});

// Types 
import { RootStackParamList } from "../navigators/RootStack";
import { StackScreenProps } from "@react-navigation/stack";

type Props = StackScreenProps<RootStackParamList, "Balance">;

const Balance: FunctionComponent<Props> = ({ route }) => {
    return(
        <BalanceContainer>
            <StatusBar style="dark" />
            <AmountSection balance={route?.params?.balance}/>
            <BalanceCardSection {...route?.params}/>
            <ButtonSection />
        </BalanceContainer>
    );
}

export default Balance;