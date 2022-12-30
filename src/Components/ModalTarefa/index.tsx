import Modal from "@mui/material/Modal";
import { ITarefas } from "../../interfaces/tarefas";
import { ModalContent } from "./styles";

interface Props {
    handleClose: () => void
    open: boolean
    setTarefa: React.Dispatch<React.SetStateAction<string>>
    tarefa: string
    setTarefas: React.Dispatch<React.SetStateAction<ITarefas[]>>
    tarefas: ITarefas[]
}

export const ModalTarefa = ({
    handleClose,
    open,
    setTarefa,
    tarefa,
    setTarefas,
    tarefas }: Props) => {

    const formataData = (data: Date) => {
        return String(Intl.DateTimeFormat('pt-br').format(data))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setTarefas([
            { tarefa, data: formataData(new Date()) },
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
                    <input
                        type="text"
                        maxLength={25}
                        name="Tarefa"
                        id="tarefa"
                        onChange={e => setTarefa(e.target.value)}
                    />
                    <button>Adicionar</button>
                </form>
            </ModalContent>
        </Modal>
    )
}