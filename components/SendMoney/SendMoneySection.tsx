import React, { FunctionComponent, useRef } from "react";
import { SendMoneySectionProps } from "./types";

import BottomSheet from "reanimated-bottom-sheet";
import styled from "styled-components/native";
import { colors } from "../colors";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";

const SendMoneySectionBackground = styled.View({
    width: '100%',
    paddingTop: '15px',
    backgroundColor: colors.white,
});

const SendMoneyRow = styled.View({
    width: '100%',
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
    paddingLeft: '25px',
    paddingRight: '25px',
});

const SendMoneyList = styled.FlatList({
    width: '100%',
    flex: 'auto',
    minHeight: '80%',
    paddingLeft: '25px',
    paddingRight: '25px',
});

const TextButton = styled.TouchableOpacity({
    
});

const SendMoneySection: FunctionComponent<SendMoneySectionProps> = (props) => {
    const sheetRef = useRef<BottomSheet>(null);
    
    const renderContent = () => {
        return (
            <SendMoneySectionBackground>
                <SendMoneyRow style={{ marginBottom: 25 }}>
                    <RegularText
                        textStyles={{
                            fontSize: 19,
                            color: colors.secondary
                        }}
                    >
                        Send money to
                    </RegularText>
                    <TextButton onPress={() => alert("Add")}>
                        <SmallText
                            textStyles={{
                                fontWeight: 'bold',
                                color: colors.tertiary,
                            }}
                        >
                            +Add
                        </SmallText>
                    </TextButton>
                </SendMoneyRow>
            </SendMoneySectionBackground>
        );
    }

    return (
        <BottomSheet 
            ref={sheetRef}
            snapPoints={[240, 85]}
            borderRadius={25}
            initialSnap={1}
            enabledContentTapInteraction={false}
            renderContent={renderContent}
        />
    );
}

export default SendMoneySection;