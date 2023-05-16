import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

// Icons
import { Ionicons } from '@expo/vector-icons';
import { TransactionAviProps } from "./types";

const StyledView = styled.View({
    height: '45px',
    width: '45px',
    borderRadius: '10px',
    justifyContent: 'center',
    alignItems: 'center',
});

const TransactionAvi: FunctionComponent<TransactionAviProps> = (props) => {
    return (
        <StyledView style={{ backgroundColor: props.background}}>
            <Ionicons name={props.icon} size={25}/>
        </StyledView>
    );
}

export default TransactionAvi;