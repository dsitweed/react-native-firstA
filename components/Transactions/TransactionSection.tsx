import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../colors";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";

import { Ionicons } from "@expo/vector-icons";
import { TransactionSectionProps } from "./types";
import TransactionItem from "./TransactionItem";

const TransactionSectionBackground = styled.View({
    width: '100%',
    paddingLeft: '25px',
    paddingRight: '25px',
    paddingTop: '5px',
    flex: 2,
});

const TransactionRow = styled.View({
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
});

const TransactionList = styled.FlatList({
    width: '100%',
});

const TransactionSection: FunctionComponent<TransactionSectionProps> = (props) => {
    console.log(props.data);
    return (
        <TransactionSectionBackground>
            <TransactionRow style={{ marginBottom: 25}}>
                <RegularText textStyles={{ fontSize: 19, color: colors.secondary}}>
                    Transaction
                </RegularText>
                <SmallText textStyles={{ color: colors.secondary }}>
                    Recent
                    <Ionicons name="caret-down" size={13} color={colors.grayDark} />
                </SmallText>
            </TransactionRow>
            <TransactionList
                data={props.data}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 25
                }}
                keyExtractor={({ id }: any) => id.toString()}
                renderItem={({ item }: any) => <TransactionItem {...item} />}
            />
        </TransactionSectionBackground>
    );
}

export default TransactionSection;