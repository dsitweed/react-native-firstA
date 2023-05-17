import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import RegularButton from "../Buttons/RegularButton";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../colors";


const ButtonSectionBackground = styled.View({
    width: '100%',
    alignItems: 'center',
    flex: 1,
});

const ButtonSection: FunctionComponent = () => {
    return(
        <ButtonSectionBackground>
            <RegularButton
                onPress={() => {}}
                btnStyles={{
                    width: '50%'
                }}
            >
                Cancel <Ionicons name="card" size={17} color={colors.white} />
            </RegularButton>
        </ButtonSectionBackground>
    );
}

export default ButtonSection;