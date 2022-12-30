import { useEffect, useState } from "react";
import { ITarefas } from "../../interfaces/tarefas";
import { Card } from "../Card"
import { ModalTarefa } from "../ModalTarefa";

export const Feito = () => {
    const getTarefa: ITarefas[] = JSON.parse(localStorage.getItem('tarefasFeito')!) || []

    const [open, setOpen] = useState(false);
    const [tarefa, setTarefa] = useState('');
    const [tarefas, setTarefas] = useState<ITarefas[]>(getTarefa);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        localStorage.setItem('tarefasFeito', JSON.stringify(tarefas));
    }, [tarefas])
    return (
        <>
            <Card
                titulo="Feito"
                cor="#00FF97"
                handleOpen={handleOpen}
                tarefas={tarefas}
                setTarefas={setTarefas}
            />
            <ModalTarefa
                handleClose={handleClose}
                open={open}
                setTarefa={setTarefa}
                tarefa={tarefa}
                setTarefas={setTarefas}
                tarefas={tarefas}
                corBotão="#00FF97"
            />
        </>
    )
}