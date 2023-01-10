import styled from "styled-components";

export const HeaderContainer = styled.header`
    border-bottom: 1px solid #aba8a8;
    padding-bottom: 1rem;
    width: 100%;
    @media screen and (min-width: 1024px) {
        padding-bottom: 2rem;
    }
`

export const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media screen and (min-width: 1024px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: initial;
    }
`

export const HeaderLogo = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;
`

export const Title = styled.h1`
    font-weight: 900;
    text-transform: uppercase;
    font-size: 1.5rem;
`
