import styled from "styled-components";
import GlobalStyle   from "./GlobalStyle";

export const MenuWrap = styled.div`
    width: 500px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ContentWrap = styled.div`
    width: 80%;
    height: 80%;
    display: flex;
    flex-direction: column; 
`

export const Title = styled.div`
    font-family: Moyamoya, sans-serif;
    color: lightblue;
    font-size: 40px;
`;

export const SubTitle = styled.div`
    font-family: Jamsil_light, sans-serif;
    color: cornflowerblue;
    font-size: 15px;
    margin-top: 10px;
    font-weight: bold;
`;

export const WholeWrap = styled.div`
    display: flex;
    flex-direction: column;
    height: 80%;
    justify-content: space-around;
`;

export const ProfileWrap = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`

export const ProfilePicture = styled.img`
    width: 50%;
`

export const InfoWrap = styled.div`
    font-family: Jamsil_light, SansSerif;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    gap: 10px;
`;

export const ProfileTitle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: lightblue;
    font-size: 20px;
`

export const ProfileAnswer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: black;
    font-size: 20px;
`