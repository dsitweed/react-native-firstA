import React, { FunctionComponent } from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { colors } from "../colors";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import TransactionAvi from "./TransactionAvi";
import { TransactionProps } from "./types";

const TransactionRow = styled.View({
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: '100%',
    marginBottom: '25px',
});

const LeftView = styled.View({
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: '100%',
    alignItems: 'center',
    flex: 2,
});

const RightView = styled.View({
    flex: 1
});

const TransactionItem:FunctionComponent<TransactionProps> = (props) => {
    return (
        <TransactionRow>
            <LeftView>
                <TransactionAvi 
                    background={props.art.background}
                    icon={props.art.icon}
                />
                <View style={{ marginLeft: 10 }}>
                    <RegularText
                        textStyles={{
                            color: colors.secondary,
                            textAlign: "center",
                            marginBottom: 5,
                        }}
                    >
                        {props.title}
                    </RegularText>
                    <SmallText
                        textStyles={{
                            textAlign: 'left',
                            color: colors.grayDark,
                        }}
                    >
                        {props.subtitle}
                    </SmallText>
                </View>
            </LeftView>
            <RightView>
                <RegularText
                    textStyles={{
                        color: colors.secondary,
                        textAlign: "right",
                        marginBottom: 5,
                    }}
                >
                    {props.title}
                </RegularText>
                <SmallText
                    textStyles={{
                        textAlign: 'right',
                        color: colors.grayDark,
                    }}
                >
                    {props.date}
                </SmallText>
            </RightView>
        </TransactionRow>
    );
}

export default TransactionItem;