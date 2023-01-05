import { useContext, useEffect, useState } from "react";
import { Tarefas } from "../../common/tarefas";
import { ITarefas } from "../../interfaces/tarefas";
import { Card } from "../Card"
import { ModalTarefa } from "../ModalTarefa";

export const Fazendo = () => {
    const {setTarefasFazendo, tarefasFazendo} = useContext(Tarefas);
    const [open, setOpen] = useState(false);
    const [tarefa, setTarefa] = useState('');
    const [tarefaEditadaId, setTarefaEditadaId] = useState('');

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        localStorage.setItem('tarefasFazendo', JSON.stringify(tarefasFazendo));
    }, [tarefasFazendo])
    
    return (
        <>
            <Card
                titulo="Fazendo"
                cor="#06BFF0"
                handleOpen={handleOpen}
                tarefas={tarefasFazendo}
                setTarefas={setTarefasFazendo}
                setTarefa={setTarefa}
                setTarefaEditadaId={setTarefaEditadaId}
            />
            <ModalTarefa
                handleClose={handleClose}
                open={open}
                setTarefa={setTarefa}
                tarefa={tarefa}
                setTarefas={setTarefasFazendo}
                tarefas={tarefasFazendo}
                corBotão="#06BFF0"
                tarefaEditadaId={tarefaEditadaId}
                setTarefaEditadaId={setTarefaEditadaId}
            />
        </>
    )
}