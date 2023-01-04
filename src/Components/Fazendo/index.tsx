import { useEffect, useState } from "react";
import { ITarefas } from "../../interfaces/tarefas";
import { Card } from "../Card"
import { ModalTarefa } from "../ModalTarefa";

export const Fazendo = () => {
    const getTarefa: ITarefas[] = JSON.parse(localStorage.getItem('tarefasFazendo')!) || []

    const [open, setOpen] = useState(false);
    const [tarefa, setTarefa] = useState('');
    const [tarefas, setTarefas] = useState<ITarefas[]>(getTarefa);
    const [tarefaEditadaId, setTarefaEditadaId] = useState('');

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        localStorage.setItem('tarefasFazendo', JSON.stringify(tarefas));
    }, [tarefas])
    
    return (
        <>
            <Card
                titulo="Fazendo"
                cor="#06BFF0"
                handleOpen={handleOpen}
                tarefas={tarefas}
                setTarefas={setTarefas}
                setTarefa={setTarefa}
                setTarefaEditadaId={setTarefaEditadaId}
            />
            <ModalTarefa
                handleClose={handleClose}
                open={open}
                setTarefa={setTarefa}
                tarefa={tarefa}
                setTarefas={setTarefas}
                tarefas={tarefas}
                corBotão="#06BFF0"
                tarefaEditadaId={tarefaEditadaId}
                setTarefaEditadaId={setTarefaEditadaId}
            />
        </>
    )
}