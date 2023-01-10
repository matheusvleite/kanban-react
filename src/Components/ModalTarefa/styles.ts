import styled from "styled-components";

interface Props {
    corBotão: string
}

export const ModalContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    width: 90%;
    min-height: 45vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    @media screen and (min-width: 1024px) {
        width: 28%;
        padding: 0;
    }
`

export const ModalForm = styled.form`
    display: flex;
`

export const ModalInput = styled.input`
    outline: none;
    border-radius: 5px 0 0 5px;
    padding: .39rem .4rem;
    border: 1px solid black;
    width: 60%;
    @media screen and (min-width: 1024px) {
       width: 100%;
    }
`
export const Button = styled.button<Props>`
    padding: .39rem 1rem;
    outline: none;
    border: none;
    background-color: ${({ corBotão }) => corBotão};
    color: black;
    font-weight: 900;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    font-size: 14px;
`