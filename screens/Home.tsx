import { StatusBar } from "expo-status-bar";
import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../components/colors";
import { Container } from "../components/shared";

const HomeContainer = styled(Container)({
    backgroundColor: colors.grayLight,
    width: '100%',
    flex: 1
});

const Home: FunctionComponent = () => {
    return (
        <HomeContainer>
            <StatusBar style="dark"/>
        </HomeContainer>
    )
}

export default Home;