import Modal from "@mui/material/Modal";
import { useId } from "react";
import { ITarefas } from "../../interfaces/tarefas";
import { ButtonCancelar } from "../ButtonCancelar";
import { Button, ModalContent, ModalForm, ModalInput } from "./styles";

interface Props {
    handleClose: () => void
    open: boolean
    setTarefa: React.Dispatch<React.SetStateAction<string>>
    tarefa: string
    setTarefas: React.Dispatch<React.SetStateAction<ITarefas[]>>
    tarefas: ITarefas[]
    corBotão: string
    tarefaEditadaId: string
    setTarefaEditadaId: React.Dispatch<React.SetStateAction<string>>
}

export const ModalTarefa = ({
    handleClose,
    open,
    setTarefa,
    tarefa,
    setTarefas,
    tarefas,
    corBotão,
    tarefaEditadaId,
    setTarefaEditadaId
}: Props) => {
    const formataData = (data: Date) => {
        return String(Intl.DateTimeFormat('pt-br').format(data))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (tarefaEditadaId) {
            const tarefaEditada = tarefas.find(item => item.id === tarefaEditadaId);
            const atualizarTarefas = tarefas.map(item =>
                item.id === tarefaEditada?.id
                    ? (item = { id: item.id, tarefa, data: item.data })
                    : { id: item.id, tarefa: item.tarefa, data: item.data }
            );
            setTarefas(atualizarTarefas);
            setTarefaEditadaId('');
            setTarefa("");
            handleClose();
            return;
        }
        setTarefas([
            { id: String(Date.now()), tarefa, data: formataData(new Date()) },
            ...tarefas
        ])
        setTarefa('');
        handleClose();
    }

    const cancelarEditarTarefa = () => {
        setTarefaEditadaId('');
        setTarefa("");
        handleClose()
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <ModalContent>
                <ModalForm onSubmit={handleSubmit}>
                    <ModalInput
                        type="text"
                        maxLength={25}
                        name="Tarefa"
                        id="tarefa"
                        onChange={e => setTarefa(e.target.value)}
                        required
                        placeholder="Digite a tarefa"
                        defaultValue={tarefa}
                    />
                    <Button corBotão={corBotão}>{tarefaEditadaId ? 'Editar' : 'Adicionar'}</Button>
                    {tarefaEditadaId ? <ButtonCancelar type="button" onClick={() => cancelarEditarTarefa()} /> : ''}
                </ModalForm>
            </ModalContent>
        </Modal>
    )
}