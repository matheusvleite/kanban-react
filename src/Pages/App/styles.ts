import styled from "styled-components";

export const Container = styled.div`
    margin: 1rem 1rem;
    min-height: 100vh;
`

export const Tarefas = styled.section`
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-top: 2rem;
    flex-direction: column;
    @media screen and (min-width: 1024px) {
        flex-direction: initial;
    }
`