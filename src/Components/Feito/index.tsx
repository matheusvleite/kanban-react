import { useContext, useEffect, useState } from "react";
import { Tarefas } from "../../common/tarefas";
import { ITarefas } from "../../interfaces/tarefas";
import { Card } from "../Card"
import { ModalTarefa } from "../ModalTarefa";

export const Feito = () => {
    
    const {setTarefasFeito, tarefasFeito} = useContext(Tarefas);
    const [open, setOpen] = useState(false);
    const [tarefa, setTarefa] = useState('');
    const [tarefaEditadaId, setTarefaEditadaId] = useState('');

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        localStorage.setItem('tarefasFeito', JSON.stringify(tarefasFeito));
    }, [tarefasFeito])

    return (
        <>
            <Card
                titulo="Feito"
                cor="#00FF97"
                handleOpen={handleOpen}
                tarefas={tarefasFeito}
                setTarefas={setTarefasFeito}
                setTarefa={setTarefa}
                setTarefaEditadaId={setTarefaEditadaId}
            />
            <ModalTarefa
                handleClose={handleClose}
                open={open}
                setTarefa={setTarefa}
                tarefa={tarefa}
                setTarefas={setTarefasFeito}
                tarefas={tarefasFeito}
                corBotão="#00FF97"
                tarefaEditadaId={tarefaEditadaId}
                setTarefaEditadaId={setTarefaEditadaId}
            />
        </>
    )
}