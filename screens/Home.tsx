import { StatusBar } from "expo-status-bar";
import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../components/colors";
import { Container } from "../components/shared";
import CardSection from "../components/Cards/CardSection";
import TransactionSection from "../components/Transactions/TransactionSection";
import SendMoneySection from "../components/SendMoney/SendMoneySection";

// Images
import logo1 from '../assets/cards/mc.png';
import logo2 from '../assets/cards/visa_white.png';
// Send money images
import portrait1 from '../assets/portraits/1.jpg';
import portrait2 from '../assets/portraits/2.jpg';
import portrait3 from '../assets/portraits/3.jpg';

// Types
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../navigators/RootStack";

export type HomeScreenProps = StackScreenProps<RootStackParamList, "Home">;

const HomeContainer = styled(Container)({
    backgroundColor: colors.grayLight,
    width: '100%',
    flex: 1
});

const Home: FunctionComponent<HomeScreenProps> = () => {
    const cardData = [
        {
            id: 1,
            accountNo: "19297903025",
            balance: 2000.15,
            alias: "Work debit",
            logo: logo1,
        },
        {
            id: 2,
            accountNo: "195028873003",
            balance: 9000.12,
            alias: "Work debit",
            logo: logo2,
        },
        {
            id: 3,
            accountNo: "753157900844",
            balance: 21000.2,
            alias: "School Prepaid",
            logo: logo2,
        },
    ];

    const transactionData = [
        {
            id: 1,
            amount: "-$86.00",
            date: '14 Sep 2022',
            title: "Taxi",
            subtitle: "Uber car",
            art: {
                background: colors.primary,
                icon: "car",
            },
        },
        {
            id: 2,
            amount: "-$286.00",
            date: '14 Sep 2023',
            title: "Shopping",
            subtitle: "Ali express",
            art: {
                background: colors.tertiary,
                icon: "cart",
            },
        },
        {
            id: 3,
            amount: "-$586.00",
            date: '14 Sep 2022',
            title: "Travel",
            subtitle: "Phu Quoc tour",
            art: {
                background: colors.primary,
                icon: "airplane",
            },
        },
    ];

    const sendMoneyData = [
        {
            id: 1,
            amount: '245.56',
            name: "Nguyen Van Ky",
            background: colors.tertiary,
            image: portrait1,
        },
        {
            id: 2,
            amount: '4450.12',
            name: "Nguyen Thi Dinh",
            background: colors.primary,
            image: portrait2,
        },
        {
            id: 3,
            amount: '6250.21',
            name: "Nguyen Van Nhong",
            background: colors.accent,
            image: portrait3,
        },
    ];

    return (
        <HomeContainer>
            <StatusBar style="dark"/>
            <CardSection data={cardData} />
            <TransactionSection data={transactionData} />
            {/* <SendMoneySection data={sendMoneyData}/> */}
        </HomeContainer>
    )
}

export default Home;