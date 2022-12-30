import { useEffect, useState } from "react";
import { ITarefas } from "../../interfaces/tarefas";
import { Card } from "../Card";
import { ModalTarefa } from "../ModalTarefa";

export const AFazer = () => {
    const getTarefa: ITarefas[] = JSON.parse(localStorage.getItem('tarefasAFazer')!) || []

    const [open, setOpen] = useState(false);
    const [tarefa, setTarefa] = useState('');
    const [tarefas, setTarefas] = useState<ITarefas[]>(getTarefa);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        localStorage.setItem('tarefasAFazer', JSON.stringify(tarefas));
    }, [tarefas])

    return (
        <>
            <Card
                titulo="Fazer"
                cor="#E000FF"
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
            />
        </>
    )
}