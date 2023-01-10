import styled from "styled-components";

interface Props {
    cor: string
}

export const CardContainer = styled.div<Props>`
    background-color: ${({ cor }) => cor};
    min-height: 60vh;
    width: 100%;
    padding: .4rem;
    box-shadow: 7px 1px 5px #aba8a8;
    @media screen and (min-width: 1024px) {
        padding: 1rem;
        width: 25%;
    }
`

export const TitleCard = styled.h2`
    color: black;
    font-weight: 900;
    font-size: 1.5rem;
`

export const TarefasCard = styled.ul`
    height: 40vh;
    overflow-y: auto;
    overflow-x: hidden;
    margin-top: .7rem;
`

export const ItemCard = styled.li`
    width: 100%;
    min-height: 10vh;
    background-color: white;
    border-radius: 8px;
    padding: .4rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (min-width: 1024px) {
        padding: 1rem;
    }
`

export const Icones = styled.div`
    display: flex;
    gap: .5rem;
`

export const ContentAdd = styled.div`
    display: flex;
    align-items: center;
    gap: .3rem;
    margin-top: 1rem;
`

export const ButtonAdd = styled.button`
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;
    font-weight: 900;
    color: black;
`