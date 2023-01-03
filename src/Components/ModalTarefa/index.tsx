import Modal from "@mui/material/Modal";
import { useId } from "react";
import { ITarefas } from "../../interfaces/tarefas";
import { Button, ModalContent, ModalInput } from "./styles";

interface Props {
    handleClose: () => void
    open: boolean
    setTarefa: React.Dispatch<React.SetStateAction<string>>
    tarefa: string
    setTarefas: React.Dispatch<React.SetStateAction<ITarefas[]>>
    tarefas: ITarefas[]
    corBotão: string
}

export const ModalTarefa = ({
    handleClose,
    open,
    setTarefa,
    tarefa,
    setTarefas,
    tarefas,
    corBotão
}: Props) => {
    const formataData = (data: Date) => {
        return String(Intl.DateTimeFormat('pt-br').format(data))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setTarefas([
            { tarefa, data: formataData(new Date()), id: `${tarefa}-${Date.now()}` },
            ...tarefas
        ])

        handleClose()
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <ModalContent>
                <form onSubmit={handleSubmit}>
                    <ModalInput
                        type="text"
                        maxLength={25}
                        name="Tarefa"
                        id="tarefa"
                        onChange={e => setTarefa(e.target.value)}
                        required
                        placeholder="Digite a tarefa"
                    />
                    <Button corBotão={corBotão}>Adicionar</Button>
                </form>
            </ModalContent>
        </Modal>
    )
}