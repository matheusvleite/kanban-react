import { useEffect, useState } from "react";
import { DataAtualContainer, Hora } from "./styles";

export const DataAtual = () => {
    let dataAtual = new Date();

    const [horaAtualizada, setHoraAtualizada] = useState('');
    const [dataAtualizada, setDataAtualizada] = useState('')

    useEffect(() => {
        setTimeout(() => {
            setHoraAtualizada(HoraAtual);
            setDataAtualizada(Intl.DateTimeFormat('pt-br', { dateStyle: 'long'}).format(dataAtual));
        }, 1000)
    })

    const HoraAtual = () => {
        return `
        ${String(dataAtual.getHours()).padStart(2, '0')}:
        ${String(dataAtual.getMinutes()).padStart(2, '0')}:
        ${String(dataAtual.getSeconds()).padStart(2, '0')}
        `
    }

    return (
        <DataAtualContainer>
            <Hora>
                {horaAtualizada}
            </Hora>
            <p>
                {dataAtualizada}
            </p>
        </DataAtualContainer>
    )
}