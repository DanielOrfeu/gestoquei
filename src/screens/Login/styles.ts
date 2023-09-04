import { styled } from 'styled-components/native'

export const Container = styled.View`
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.COLORS.PRIMARY};
    color: ${({theme}) => theme.COLORS.TEXT_100};
    gap: 10px;
`
export const Title = styled.Text`
    color: ${({theme}) => theme.COLORS.TEXT_100};
    font-family: ${({theme}) => theme.FONTS.TITLE};
    font-size: 35px;
`
export const LoginBtn = styled.Button`
    background-color: ${({theme}) => theme.COLORS.BACKGROUND};
    color: ${({theme}) => theme.COLORS.TEXT_100};
`

export const Field = styled.TextInput`
    width: 80%;
    border-bottom-width: 2px;
    border-color: ${({theme}) => theme.COLORS.TEXT_600};
    margin: 10px;
`