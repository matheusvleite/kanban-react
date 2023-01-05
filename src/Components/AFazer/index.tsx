import { useContext, useEffect, useState } from "react";
import { Tarefas } from "../../common/tarefas";
import { ITarefas } from "../../interfaces/tarefas";
import { Card } from "../Card";
import { ModalTarefa } from "../ModalTarefa";

export const AFazer = () => {
    const {setTarefasAFazer, tarefasAFazer} = useContext(Tarefas);
    const [open, setOpen] = useState(false);
    const [tarefa, setTarefa] = useState('');
    const [tarefaEditadaId, setTarefaEditadaId] = useState('');
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    useEffect(() => {
        localStorage.setItem('tarefasAFazer', JSON.stringify(tarefasAFazer));
    }, [tarefasAFazer])

    return (
        <>
            <Card
                titulo="Fazer"
                cor="#E000FF"
                handleOpen={handleOpen}
                tarefas={tarefasAFazer}
                setTarefas={setTarefasAFazer}
                setTarefa={setTarefa}
                setTarefaEditadaId={setTarefaEditadaId}
            />
            <ModalTarefa
                handleClose={handleClose}
                open={open}
                setTarefa={setTarefa}
                tarefa={tarefa}
                setTarefas={setTarefasAFazer}
                tarefas={tarefasAFazer}
                corBotão="#E000FF"
                tarefaEditadaId={tarefaEditadaId}
                setTarefaEditadaId={setTarefaEditadaId}
            />
        </>
    )
}